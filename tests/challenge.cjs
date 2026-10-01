const { test } = require("node:test");
const assert = require("node:assert/strict");
const path = require("node:path");
const mod = (n) =>
  require(path.join(process.env.RTT_TEST_BUILD, "challenge", n));
const { Engine, plan } = mod("engine");
const { computeStats, compare, shareable } = mod("scoring");
const {
  encodeChallenge,
  decodeChallenge,
  validatePayload,
  normalizeName,
  parseHash,
  challengeUrl,
} = mod("codec");
const { saveRun, loadHistory, saveProfile, loadProfile } = mod("storage");
const { nativeShare, copyLink, shareText } = mod("sharing");
const classic = (r = [240, 250, 245, 255, 250]) => ({
  n: "Alex",
  i: "mouse",
  r,
});
const advanced = (rt = 250) => ({
  n: "Sam",
  i: "touch",
  r: [
    ...Array.from({ length: 12 }, () => ["g", "h", rt]),
    ...Array.from({ length: 8 }, () => ["n", "w"]),
  ],
});
const invite = (mode = "classic", target = classic()) => ({
  v: 1,
  rv: 1,
  mode,
  id: "a1b2c3d4e5f60708",
  kind: "invite",
  target,
});
const versus = (mode, a, b, rv = 1) =>
  compare({ mode, rv: 1, score: a }, { mode, rv, score: b });
class Clock {
  t = 0;
  serial = 0;
  jobs = new Map();
  stale = [];
  random = () => 0.999999;
  now = () => this.t;
  delay = (fn, ms) => {
    const id = ++this.serial;
    this.jobs.set(id, { fn, at: this.t + ms });
    this.stale.push(fn);
    return id;
  };
  frame = (fn) => this.delay(fn, 16);
  cancelDelay = (id) => this.jobs.delete(id);
  cancelFrame = this.cancelDelay;
  tick(ms) {
    const end = this.t + ms;
    for (;;) {
      const jobs = [...this.jobs]
        .filter(([, v]) => v.at <= end)
        .sort((a, b) => a[1].at - b[1].at);
      if (!jobs.length) break;
      const [id, j] = jobs[0];
      this.jobs.delete(id);
      this.t = j.at;
      j.fn();
    }
    this.t = end;
  }
}
function setup(mode = "advanced") {
  const clock = new Clock();
  const game = new Engine(mode, () => {}, clock);
  game.start();
  return { clock, game };
}
function signal(clock, game) {
  while (game.state.phase !== "signal") {
    assert.ok(["ready", "waiting", "feedback"].includes(game.state.phase));
    clock.tick(1);
  }
}
function hit(clock, game, elapsed = 250) {
  signal(clock, game);
  clock.tick(elapsed);
  game.down("p", "mouse");
  game.up("p");
}

test("S01–S04 classic averages, ties, incomplete/invalid scores", () => {
  assert.equal(computeStats("classic", classic().r).score10, 2480);
  assert.deepEqual(
    versus("classic", classic(), classic([230, 240, 235, 245, 240])),
    { winner: "b", reason: "faster", difference: 10 },
  );
  assert.equal(versus("classic", classic(), classic()).reason, "tie");
  for (const r of [
    [1, 2, 3, 4],
    [1, 2, 3, 4, -1],
    [1, 2, 3, 4, 5000],
    [1, 2, 3, 4, Infinity],
    [1, 2, 3, 4, "5"],
    [1, 2, 3, 4, 1.5],
  ])
    assert.equal(shareable("classic", classic(r)), false);
});
test("S05–S12 advanced statistics and comparison priority", () => {
  const a = advanced(230),
    b = advanced(275);
  a.r[0] = ["g", "m"];
  assert.equal(versus("advanced", a, b).reason, "more_correct");
  assert.equal(versus("advanced", a, b).winner, "b");
  const c = advanced(270),
    d = advanced(250);
  c.r[0] = d.r[0] = ["g", "m"];
  assert.equal(versus("advanced", c, d).winner, "b");
  assert.equal(versus("advanced", b, b).reason, "tie");
  assert.equal(versus("advanced", a, b, 2).reason, "not_comparable");
  const missed = advanced();
  missed.r = missed.r.map((t) => (t[0] === "g" ? ["g", "m"] : t));
  assert.equal(computeStats("advanced", missed.r).correct, 8);
  assert.equal(computeStats("advanced", missed.r).miss, 12);
  assert.equal(computeStats("advanced", missed.r).score10, null);
  assert.equal(shareable("advanced", missed), false);
  assert.equal(computeStats("advanced", advanced().r).score10, 2500);
  assert.equal(
    compare(
      { mode: "classic", rv: 1, score: classic() },
      { mode: "advanced", rv: 1, score: advanced() },
    ).reason,
    "not_comparable",
  );
});
test("L01–L03 unicode invite/result round trips independent of storage", () => {
  for (const mode of ["classic", "advanced"]) {
    const target = mode === "classic" ? classic() : advanced();
    target.n = "中😀".repeat(10);
    const p = invite(mode, target);
    assert.deepEqual(decodeChallenge(encodeChallenge(p)), p);
    const result = { ...p, kind: "result", challenger: target };
    assert.deepEqual(parseHash("#c=" + encodeChallenge(result)), result);
    assert.ok(Object.isFrozen(decodeChallenge(encodeChallenge(p)).target.r));
  }
  assert.equal(normalizeName("  "), "Player");
  assert.equal(normalizeName(" Alex "), "Alex");
});
test("L04–L08 invalid tokens, schemas, versions, fields, tuples and names rejected", () => {
  for (const token of [
    "a",
    "***",
    "abc=",
    "x".repeat(4097),
    btoa("{"),
    btoa(String.fromCharCode(255)).replace(/=/g, ""),
  ])
    assert.throws(() => decodeChallenge(token));
  assert.throws(() => parseHash("#c=abc&c=def"));
  assert.equal(parseHash(""), null);
  for (const patch of [
    { v: 2 },
    { rv: 2 },
    { winner: "Alex" },
    { average: 23 },
    { challenger: classic() },
    { id: "bad" },
    { kind: "other" },
    { mode: "x" },
  ])
    assert.throws(() => validatePayload({ ...invite(), ...patch }));
  for (const n of ["a".repeat(21), "x\ny", "x\u202Ey", "x\u2066y"])
    assert.throws(() => normalizeName(n));
  for (const tuple of [
    ["n", "w", 0],
    ["n", "h", 10],
    ["g", "h", 1000],
    ["g", "h", -1],
    ["g", "h", "10"],
    ["g", "w"],
    ["g", "m", 0],
  ]) {
    const a = advanced();
    a.r[0] = tuple;
    assert.throws(() => validatePayload(invite("advanced", a)));
  }
  const a = advanced();
  a.r[0] = ["n", "w"];
  assert.throws(() => validatePayload(invite("advanced", a)));
  const raw = invite();
  raw.target.extra = 1;
  assert.throws(() => validatePayload(raw));
  // React renders this allowed short nickname as text, never HTML.
  const attack = invite("classic", { ...classic(), n: "<svg/onload=x>" });
  assert.equal(
    decodeChallenge(encodeChallenge(attack)).target.n,
    attack.target.n,
  );
});
test("L09–L10 worst-case result URL remains below 2000 and fresh invites have one score", () => {
  const score = advanced(999);
  score.n = "😀".repeat(20);
  score.i = "keyboard";
  const p = { ...invite("advanced", score), kind: "result", challenger: score };
  const url = challengeUrl(p, "https://reactiontimetestonline.com");
  assert.ok(url.length < 2000, String(url.length));
  const next = invite(p.mode, p.challenger);
  assert.equal("challenger" in decodeChallenge(encodeChallenge(next)), false);
});
test("U01 start/ready input ignored; held input waits for release", () => {
  const { clock, game } = setup();
  game.down("space", "keyboard");
  clock.tick(600);
  assert.equal(game.state.release, true);
  assert.equal(game.state.records.length, 0);
  game.up("space");
  assert.equal(game.state.phase, "waiting");
});
test("U02/U03 repeated down, double input and release guard yield one outcome", () => {
  const { clock, game } = setup();
  signal(clock, game);
  clock.tick(240.9);
  game.down("p", "touch");
  game.down("p", "touch");
  game.down("q", "touch");
  assert.equal(game.state.records.length, 1);
  assert.deepEqual(game.state.records[0], ["g", "h", 240]);
  clock.tick(450);
  assert.equal(game.state.release, true);
  game.up("p");
  assert.equal(game.state.release, true);
  game.up("q");
  assert.equal(game.state.phase, "waiting");
});
test("U05 classic fourth round false start invalidates full run; restart clears", () => {
  const { clock, game } = setup("classic");
  for (let i = 0; i < 3; i++) hit(clock, game);
  clock.tick(450);
  game.down("p", "mouse");
  assert.equal(game.state.phase, "invalid");
  assert.equal(game.state.records.length, 3);
  game.start();
  assert.equal(game.state.records.length, 0);
  assert.equal(game.state.phase, "ready");
});
test("U06 early nogo consumes its planned slot without replacement", () => {
  const { clock, game } = setup();
  for (let i = 0; i < 12; i++) hit(clock, game);
  clock.tick(450);
  game.down("p", "mouse");
  game.up("p");
  assert.deepEqual(game.state.records[12], ["n", "e"]);
  while (game.state.phase !== "completed") {
    signal(clock, game);
    clock.tick(1000);
  }
  const stats = computeStats("advanced", game.state.records);
  assert.equal(stats.correct + stats.early + stats.falseAlarm + stats.miss, 20);
  assert.equal(game.state.records.filter((t) => t[0] === "n").length, 8);
});
test("U06 no clicks completes advanced as 8/20; classic timeout invalidates", () => {
  const { clock, game } = setup();
  clock.tick(100000);
  assert.equal(game.state.phase, "completed");
  assert.equal(computeStats("advanced", game.state.records).correct, 8);
  const x = setup("classic");
  signal(x.clock, x.game);
  x.clock.tick(5000);
  assert.equal(x.game.state.phase, "invalid");
});
test("U07 exact deadline and delayed timer go input yields miss", () => {
  const { clock, game } = setup();
  signal(clock, game);
  clock.t += 1000;
  game.down("p", "mouse");
  assert.deepEqual(game.state.records[0], ["g", "m"]);
  assert.equal(game.state.phase, "feedback");
});
test("U08 late nogo click yields withhold and never leaks into next round", () => {
  const { clock, game } = setup();
  for (let i = 0; i < 12; i++) hit(clock, game);
  signal(clock, game);
  clock.t += 1001;
  game.down("p", "mouse");
  assert.deepEqual(game.state.records[12], ["n", "w"]);
  clock.tick(450);
  assert.equal(game.state.release, true);
  assert.equal(game.state.records.length, 13);
});
test("U09 old callbacks ignored after restart, including stale animation frame", () => {
  const { clock, game } = setup();
  clock.tick(600 + 1600);
  const stale = [...clock.stale];
  game.start();
  stale.forEach((fn) => fn());
  assert.equal(game.state.phase, "ready");
  assert.equal(game.state.records.length, 0);
});
test("Early timeout callback reschedules without shortening response window", () => {
  const { clock, game } = setup();
  signal(clock, game);
  clock.stale.at(-1)();
  assert.equal(game.state.phase, "signal");
  clock.tick(999);
  assert.equal(game.state.phase, "signal");
  clock.tick(1);
  assert.equal(game.state.phase, "feedback");
});
test("U10/U12 abort cancels active run but preserves completed result", () => {
  const { clock, game } = setup();
  game.abort();
  clock.stale.forEach((fn) => fn());
  assert.equal(game.state.phase, "aborted");
  game.start();
  clock.tick(100000);
  assert.equal(game.state.phase, "completed");
  game.abort();
  assert.equal(game.state.phase, "completed");
});
test("Shuffle preserves fixed counts across seeds; input kinds reflect actual inputs", () => {
  for (let i = 0; i < 100; i++) {
    const p = plan("advanced", () => i / 100);
    assert.equal(p.filter((x) => x === "g").length, 12);
    assert.equal(p.filter((x) => x === "n").length, 8);
  }
  const { clock, game } = setup();
  hit(clock, game);
  signal(clock, game);
  clock.tick(100);
  game.down("space", "keyboard");
  assert.equal(game.state.input, "mixed");
});
test("U13/U14 share cancellation, API errors and clipboard denial degrade honestly", async () => {
  Object.defineProperty(globalThis, "navigator", {
    configurable: true,
    value: {
      share: async () => {
        throw Object.assign(new Error(), { name: "AbortError" });
      },
      clipboard: {
        writeText: async () => {
          throw new Error();
        },
      },
    },
  });
  assert.equal(await nativeShare("https://example.com", invite()), "cancelled");
  assert.equal(await copyLink("x"), "manualCopy");
  navigator.share = async () => {
    throw new Error();
  };
  assert.equal(await nativeShare("x", invite()), "shareFallback");
  navigator.clipboard.writeText = async () => {};
  assert.equal(await copyLink("x"), "copied");
  assert.match(shareText(invite()), /248.0 ms/);
});
test("U15 storage errors, corrupted history, deduplication and fifty-run cap", () => {
  const data = new Map();
  globalThis.localStorage = {
    getItem: (k) => data.get(k) || null,
    setItem: (k, v) => data.set(k, v),
  };
  for (let i = 0; i < 60; i++)
    saveRun({
      mode: "classic",
      rv: 1,
      runId: i.toString(16).padStart(16, "0"),
      completedAt: 123,
      score: classic(),
    });
  assert.equal(loadHistory().length, 50);
  const run = loadHistory()[0];
  saveRun(run);
  assert.equal(loadHistory().length, 50);
  data.set("rtt.challenge.history.v1", "{oops");
  assert.deepEqual(loadHistory(), []);
  globalThis.localStorage = {
    getItem() {
      throw new Error();
    },
    setItem() {
      throw new Error();
    },
  };
  assert.deepEqual(loadHistory(), []);
  assert.equal(loadProfile(), "");
  assert.equal(saveRun(run), false);
  assert.equal(saveProfile("Alex"), false);
});
test("Analytics strips query/hash from page and referrer; invitation open is deduplicated", async () => {
  globalThis.window = {};
  globalThis.location = {
    hostname: "reactiontimetestonline.com",
    origin: "https://reactiontimetestonline.com",
    pathname: "/challenge",
    search: "?secret=x",
    hash: "#c=private",
  };
  globalThis.document = {
    referrer: "https://example.com/path?private=1#c=secret",
  };
  globalThis.localStorage = { getItem: () => null };
  const requests = [];
  globalThis.fetch = async (url, options) => {
    requests.push(JSON.parse(options.body));
    return {};
  };
  const { trackEvent, onceOpen } = mod("analytics");
  trackEvent("pageview");
  onceOpen("private-token", { mode: "classic", rulesVersion: 1 });
  onceOpen("private-token", { mode: "classic", rulesVersion: 1 });
  assert.equal(requests.length, 2);
  assert.equal(requests[0].u, "https://reactiontimetestonline.com/challenge");
  assert.equal(requests[0].r, "https://example.com/path");
  assert.ok(!JSON.stringify(requests).includes("private"));
});
test("Advanced early, miss and false alarm remain distinct completed outcomes", () => {
  const { clock, game } = setup();
  clock.tick(600);
  game.down("p", "mouse");
  game.up("p");
  assert.deepEqual(game.state.records[0], ["g", "e"]);
  signal(clock, game);
  clock.tick(1000);
  assert.deepEqual(game.state.records[1], ["g", "m"]);
  for (let i = 2; i < 12; i++) hit(clock, game);
  signal(clock, game);
  clock.tick(200);
  game.down("p", "pen");
  game.up("p");
  assert.deepEqual(game.state.records[12], ["n", "f"]);
  clock.tick(100000);
  const stats = computeStats("advanced", game.state.records);
  assert.equal(stats.early, 1);
  assert.equal(stats.miss, 1);
  assert.equal(stats.falseAlarm, 1);
  assert.equal(stats.correct, 17);
  assert.equal(game.state.phase, "completed");
});
test("Waiting durations include both configured endpoints, then commit signal in a frame", () => {
  for (const [mode, min, max] of [
    ["classic", 1200, 3000],
    ["advanced", 600, 1600],
  ]) {
    for (const [random, expected] of [
      [0, min],
      [0.999999, max],
    ]) {
      const clock = new Clock();
      clock.random = () => random;
      const game = new Engine(mode, () => {}, clock);
      game.start();
      clock.tick(600);
      clock.tick(expected - 1);
      assert.equal(game.state.phase, "waiting");
      clock.tick(1);
      assert.equal(game.state.phase, "waiting");
      clock.tick(16);
      assert.equal(game.state.phase, "signal");
    }
  }
});

test("All seven challenge dictionaries cover static and dynamic UI without English fallback", () => {
  const { challengeStrings } = mod("strings");
  const en = challengeStrings("en");
  for (const lang of ["en", "zh", "ja", "ko", "de", "fr", "vi"]) {
    const dictionary = challengeStrings(lang);
    assert.deepEqual(Object.keys(dictionary).sort(), Object.keys(en).sort());
    for (const [key, value] of Object.entries(dictionary)) {
      assert.equal(typeof value, typeof en[key], `${lang}.${key}`);
      if (typeof value === "string")
        assert.ok(value.length > 0, `${lang}.${key}`);
    }
    for (const key of [
      "title",
      "start",
      "retry",
      "invalid",
      "copy",
      "noHits",
    ]) {
      if (lang !== "en")
        assert.notEqual(dictionary[key], en[key], `${lang}.${key}`);
    }
    assert.ok(dictionary.invited("Alex").includes("Alex"));
    assert.ok(dictionary.sendResult("Alex").includes("Alex"));
    assert.ok(dictionary.correct(12, 20).includes("12"));
    assert.equal(dictionary.ms(null), "—");
    assert.ok(
      dictionary
        .ms(2480)
        .includes(lang === "de" || lang === "fr" ? "248,0" : "248.0"),
    );
    for (const input of ["mouse", "keyboard", "touch", "pen", "mixed"]) {
      if (lang !== "en")
        assert.ok(!dictionary.input(input).includes(input), `${lang}.${input}`);
    }
  }
});

test("Localized invite and return links preserve protocol bytes, scoring and length limits", () => {
  const score = advanced(999);
  score.n = "😀".repeat(20);
  score.i = "keyboard";
  const result = {
    ...invite("advanced", score),
    kind: "result",
    challenger: score,
  };
  for (const payload of [invite(), invite("advanced", score), result]) {
    const token = encodeChallenge(payload);
    for (const lang of ["en", "zh", "ja", "ko", "de", "fr", "vi"]) {
      const url = new URL(
        challengeUrl(payload, "https://reactiontimetestonline.com", lang),
      );
      assert.equal(
        url.pathname,
        lang === "en" ? "/challenge" : `/${lang}/challenge`,
      );
      assert.equal(url.hash, `#c=${token}`);
      assert.deepEqual(parseHash(url.hash), payload);
      assert.ok(url.href.length < 2000);
    }
  }
});

test("Native share uses selected language for title, text and the unchanged result", async () => {
  const { challengeStrings } = mod("strings");
  let data;
  Object.defineProperty(globalThis, "navigator", {
    configurable: true,
    value: {
      share: async (value) => {
        data = value;
      },
    },
  });
  const payload = {
    ...invite(),
    kind: "result",
    challenger: { ...classic([230, 240, 235, 245, 240]), n: "Sam" },
  };
  for (const lang of ["en", "zh", "ja", "ko", "de", "fr", "vi"]) {
    const c = challengeStrings(lang);
    const url = challengeUrl(
      payload,
      "https://reactiontimetestonline.com",
      lang,
    );
    assert.equal(await nativeShare(url, payload, lang), "shareResolved");
    assert.equal(data.title, c.shareTitle);
    assert.equal(data.url, url);
    assert.equal(data.text, shareText(payload, lang));
    assert.ok(data.text.includes(c.ms(2380)) && data.text.includes(c.ms(2480)));
    assert.ok(data.text.includes("Sam") && data.text.includes("Alex"));
    assert.equal(shareText(invite(), lang), c.classicInvite(c.ms(2480)));
    assert.equal(
      shareText(invite("advanced", advanced()), lang),
      c.advancedInvite(20, c.ms(2500)),
    );
  }
});

test("Classic green click and a second click during feedback do not become a false start", () => {
  const { clock, game } = setup("classic");
  hit(clock, game, 250);
  assert.equal(game.state.phase, "feedback");
  assert.equal(game.state.records.length, 1);
  clock.tick(140);
  game.down("p", "mouse");
  game.up("p");
  assert.equal(game.state.phase, "feedback");
  assert.equal(game.state.records.length, 1);
  clock.tick(310);
  assert.equal(game.state.phase, "waiting");
  game.down("p", "mouse");
  assert.equal(game.state.phase, "invalid");
  assert.equal(game.state.reason, "early");
  assert.equal(game.state.records.length, 1);
});
