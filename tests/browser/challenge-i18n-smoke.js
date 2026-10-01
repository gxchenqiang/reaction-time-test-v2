// Prepend globalThis.rttBrowserSpace = <active TaskSpace id>; when running via ego-browser nodejs.
const spaceId = Number(
  globalThis.rttBrowserSpace ?? process.env.RTT_BROWSER_SPACE,
);
if (!spaceId)
  throw new Error("Set RTT_BROWSER_SPACE to an active, agent-owned TaskSpace.");
const task = await taskSpace(spaceId),
  p = task.page("p1");
const assert = (await import("node:assert/strict")).default;
const origin = process.env.RTT_TEST_ORIGIN || "http://localhost:3000";
const payload = {
  v: 1,
  rv: 1,
  mode: "classic",
  id: "0123456789abcdef",
  kind: "invite",
  target: { n: "Alex", i: "mouse", r: [240, 250, 245, 255, 250] },
};
const hash = "#c=" + Buffer.from(JSON.stringify(payload)).toString("base64url");
const locales = [
  ["zh", "zh-CN", "选择语言", "好友挑战"],
  ["de", "de", "Sprache wählen", "Freunde herausfordern"],
  ["fr", "fr", "Choisir la langue", "Défi entre amis"],
  ["ja", "ja", "言語を選択", "友達チャレンジ"],
  ["ko", "ko", "언어 선택", "친구 챌린지"],
  ["vi", "vi", "Chọn ngôn ngữ", "Thử thách bạn bè"],
  ["en", "en", "Select language", "Friend challenge"],
];
const route = (lang) => (lang === "en" ? "" : "/" + lang) + "/challenge";
await p.goto(origin + route("zh") + "?mode=advanced" + hash);
for (let i = 0; i < locales.length; i++) {
  const [lang, htmlLang, menu, title] = locales[i];
  await p.waitForFunction(
    ({ htmlLang, title }) =>
      document.documentElement.lang === htmlLang &&
      document.querySelector("h1")?.innerText === title &&
      document.querySelector('[data-testid="scoreboard"]'),
    { htmlLang, title },
  );
  const state = await p.evaluate(() => ({
    hash: location.hash,
    search: location.search,
    target: document.querySelector('[data-testid="scoreboard"]').innerText,
  }));
  assert.equal(state.hash, hash);
  assert.equal(state.search, "?mode=advanced");
  assert.match(state.target, /248[.,]0/);
  console.log("Invite preserved:", lang);
  if (i < locales.length - 1) {
    await p.click('loc=role:button[name="' + menu + '"]');
    await p.click(
      'loc=css:header a[href^="' + route(locales[i + 1][0]) + '?"]',
    );
  }
}
// Check all locales at phone widths, including verbose German/French strings.
for (const width of [360, 390]) {
  await p.cdp("Emulation.setDeviceMetricsOverride", {
    width,
    height: 844,
    deviceScaleFactor: 1,
    mobile: true,
  });
  for (const [lang] of locales) {
    await p.goto(origin + route(lang) + hash);
    await p.waitForSelector('[data-testid="test-surface"]');
    await p.evaluate(() => scrollTo(0, 0));
    const layout = await p.evaluate(() => ({
      overflow: document.documentElement.scrollWidth > innerWidth,
      target: document
        .querySelector('[data-testid="scoreboard"]')
        .getBoundingClientRect().top,
      bottom: document
        .querySelector('[data-testid="test-surface"]')
        .getBoundingClientRect().bottom,
      height: innerHeight,
    }));
    assert.equal(layout.overflow, false, `${lang} at ${width}`);
    assert.ok(
      layout.target >= 0 && layout.bottom <= layout.height,
      `${lang} at ${width}: ${JSON.stringify(layout)}`,
    );
  }
}
await p.cdp("Emulation.clearDeviceMetricsOverride");
// Simulate the native share boundary, without sending to any external recipient.
await p.goto(origin + route("zh") + hash);
await p.evaluate(() =>
  Object.defineProperty(navigator, "share", {
    configurable: true,
    value: async (data) => {
      window.rttShareData = data;
    },
  }),
);
await p.click('text="开始挑战"');
for (let i = 0; i < 5; i++) {
  await p.waitForFunction(
    () =>
      document.querySelector('[data-testid="test-surface"]').dataset.phase ===
      "signal",
  );
  await p.keyboard.press("Space");
}
await p.fill("main input", "小明");
await p.click('text="把结果发给 Alex"');
const share = await p.evaluate(() => window.rttShareData);
assert.equal(share.title, "反应速度挑战");
assert.ok(share.text.includes("轮到你了"));
assert.ok(share.text.includes("小明"));
assert.equal(new URL(share.url).pathname, "/zh/challenge");
const result = JSON.parse(
  Buffer.from(new URL(share.url).hash.slice(3), "base64url").toString("utf8"),
);
assert.equal(result.kind, "result");
assert.equal(result.id, payload.id);
assert.deepEqual(result.target, payload.target);
await p.goto(share.url);
await p.waitForSelector('text="挑战 小明"');
await p.click('loc=css:footer a[href^="/fr/challenge#c="]');
await p.waitForFunction(
  () =>
    document.documentElement.lang === "fr" &&
    document.querySelector("main").innerText.includes("Défier 小明"),
);
assert.equal(await p.evaluate(() => location.hash), new URL(share.url).hash);
await p.click('text="Défier 小明"');
const rematch = await p.evaluate(() => ({
  path: location.pathname,
  hash: location.hash,
  phase: document.querySelector('[data-testid="test-surface"]').dataset.phase,
}));
assert.equal(rematch.path, "/fr/challenge");
assert.equal(rematch.phase, "idle");
assert.equal(
  JSON.parse(Buffer.from(rematch.hash.slice(3), "base64url").toString("utf8"))
    .target.n,
  "小明",
);
await p.goto(origin + "/zh/challenge#c=broken&c=broken");
await p.waitForSelector('text="此挑战链接无效或不完整。"');
console.log(
  "PASS: seven-language switching, 360/390 layouts, Chinese play/share, French return/rematch, localized invalid link.",
);
