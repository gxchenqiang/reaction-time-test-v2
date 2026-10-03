// RTT_BROWSER_SPACE=<agent-owned space> ego-browser nodejs < tests/browser/challenge-result-dialog.js
const assert = (await import("node:assert/strict")).default;
const spaceId = Number(globalThis.rttBrowserSpace ?? process.env.RTT_BROWSER_SPACE);
if (!spaceId) throw new Error("Set RTT_BROWSER_SPACE to an active, agent-owned TaskSpace.");
const p = (await taskSpace(spaceId)).page("p1");
const origin = globalThis.rttTestOrigin || process.env.RTT_TEST_ORIGIN || "http://localhost:3000";
const invite = (time = 1000, mode = "classic") => ({
  v: 1, rv: 1, mode, id: "0123456789abcdef", kind: "invite",
  target: { n: "Alex", i: "mouse", r: mode === "classic" ? Array(5).fill(time) : [
    ...Array.from({ length: 12 }, () => ["g", "h", time]),
    ...Array.from({ length: 8 }, () => ["n", "w"]),
  ] },
});
async function open(payload, lang = "en") {
  await p.goto(`${origin}${lang === "en" ? "" : `/${lang}`}/challenge${payload ? "#c=" + Buffer.from(JSON.stringify(payload)).toString("base64url") : ""}`);
  await p.waitForSelector('[data-testid="test-surface"]');
  await p.snapshot({ scope: "full_page" });
}
async function start() {
  await p.click('loc=css:main button.challenge-primary.w-full');
}
async function outcome(expected) {
  await p.waitForSelector('dialog[open]');
  assert.equal(await p.evaluate(() => document.querySelector("dialog").dataset.outcome), expected);
}
// Keep actual round waits, but use an injected monotonic reaction clock for exact ties.
async function classic(payload, lang, expected) {
  await open(payload, lang);
  await p.evaluate(() => {
    window.rttNow = 0;
    performance.now = () => window.rttNow;
    const area = document.querySelector('[data-testid="test-surface"]');
    const observer = new MutationObserver(() => {
      if (area.dataset.phase === "signal") {
        window.rttNow += 250;
        area.dispatchEvent(new PointerEvent("pointerdown", { bubbles: true, isPrimary: true, button: 0, pointerId: 77, pointerType: "mouse" }));
        window.dispatchEvent(new PointerEvent("pointerup", { pointerId: 77 }));
      }
      if (area.dataset.phase === "completed") observer.disconnect();
    });
    observer.observe(area, { attributes: true, attributeFilter: ["data-phase"] });
  });
  await start();
  await p.waitForFunction(() => document.querySelector('[data-testid="test-surface"]').dataset.phase === "completed", undefined, { timeout: 30000 });
  await outcome(expected);
  console.log(`PASS ${lang} classic ${expected}`);
}

await classic(invite(), "zh", "won");
await p.snapshot();
await p.evaluate(() => Object.defineProperty(navigator, "share", { configurable: true, value: async (data) => {
  window.rttShareData = data;
  throw new DOMException("Cancelled", "AbortError");
} }));
await p.fill("dialog input", "小明");
await p.click('loc=css:dialog button:text-is("把结果发给 Alex")');
let shared = await p.evaluate(() => window.rttShareData);
const decode = (url) => JSON.parse(Buffer.from(new URL(url).hash.slice(3), "base64url").toString("utf8"));
assert.equal(shared.title, "反应速度挑战");
assert.equal(new URL(shared.url).pathname, "/zh/challenge");
assert.equal(decode(shared.url).kind, "result");
assert.equal(decode(shared.url).id, invite().id);
assert.deepEqual(decode(shared.url).target, invite().target);
assert.equal(decode(shared.url).challenger.n, "小明");
await outcome("won"); // Cancellation keeps the result and fallback available.
await p.evaluate(() => Object.defineProperty(navigator, "share", { configurable: true, value: async () => { throw new Error("Unavailable"); } }));
await p.click('loc=css:dialog button:text-is("把结果发给 Alex")');
await p.waitForSelector('loc=css:dialog p:text-is("暂时无法分享，请复制下方链接。")');
await p.evaluate(() => Object.defineProperty(navigator, "clipboard", { configurable: true, value: undefined }));
await p.click('loc=css:dialog button:text-is("复制链接")');
await p.waitForSelector('loc=css:dialog p:text-is("请选中并复制下方链接。")');
await p.click('loc=css:dialog button:text-is("挑战另一位好友")');
const next = decode(await p.evaluate(() => document.querySelector("dialog textarea").value));
assert.equal(next.kind, "invite");
assert.notEqual(next.id, invite().id);
assert.equal(next.target.n, "小明");
assert.equal("challenger" in next, false);
for (let i = 0; i < 12; i++) {
  await p.keyboard.press("Tab");
  assert.equal(await p.evaluate(() => !!document.activeElement.closest("dialog")), true);
}
await p.keyboard.press("Escape");
assert.equal(await p.evaluate(() => !!document.querySelector("dialog")), false);
assert.equal(await p.evaluate(() => document.activeElement.textContent), "再试一次");
await p.fill("main input", "改名");
assert.equal(await p.evaluate(() => !!document.querySelector("dialog")), false);
console.log("PASS result/invitation payloads, cancelled/failed shares, manual copy, focus trap, Escape and no reopen");

await classic(invite(0), "en", "lost");
await p.snapshot();
await p.evaluate(() => Object.defineProperty(navigator, "share", { configurable: true, value: undefined }));
await p.click('loc=css:dialog button:text-is("Send result to Alex")');
assert.equal(decode(await p.evaluate(() => document.querySelector("dialog textarea").value)).kind, "result");
await p.fill("dialog input", "a".repeat(21));
await p.click('loc=css:dialog button:text-is("Send result to Alex")');
assert.equal(await p.evaluate(() => document.querySelector("dialog input").getAttribute("aria-invalid")), "true");
await p.click('loc=css:dialog button:text-is("Try again")');
assert.equal(await p.evaluate(() => document.activeElement.dataset.testid), "test-surface");
await p.waitForFunction(() => document.querySelector('[data-testid="test-surface"]').dataset.phase === "waiting");
await p.keyboard.press("Space");
await outcome("invalid");
assert.equal(await p.evaluate(() => !!document.querySelector("dialog input")), false);
console.log("PASS loss sharing, nickname validation and retry preserves target");

await classic(invite(250), "de", "tie");
await p.snapshot();
await p.fill("dialog input", "😀".repeat(20));
for (const width of [360, 390]) {
  await p.cdp("Emulation.setDeviceMetricsOverride", { width, height: 800, deviceScaleFactor: 1, mobile: true });
  const layout = await p.evaluate(() => {
    const d = document.querySelector("dialog"), r = d.getBoundingClientRect();
    return { overflow: d.scrollWidth > d.clientWidth, pageOverflow: document.documentElement.scrollWidth > innerWidth, top: r.top, bottom: r.bottom, height: innerHeight };
  });
  assert.equal(layout.overflow, false);
  assert.equal(layout.pageOverflow, false);
  assert.ok(layout.top >= 0 && layout.bottom <= layout.height);
}
console.log(await p.screenshot({ path: "/tmp/rtt-challenge-dialog-mobile.png" }));
await p.cdp("Emulation.clearDeviceMetricsOverride");
await p.click('loc=css:dialog button:text-is("Ergebnisse ansehen")');
assert.equal(await p.evaluate(() => !!document.querySelector("dialog")), false);
console.log("PASS exact tie, close button, long names, mobile 360/390 dialog layout");

for (const [lang, heading] of [
  ["en", "This run is invalid"], ["zh", "本次挑战无效"], ["ja", "今回のチャレンジは無効です"],
  ["ko", "이번 기록은 무효예요"], ["de", "Dieser Durchlauf ist ungültig"],
  ["fr", "Cette partie est invalide"], ["vi", "Lượt chơi này không hợp lệ"],
]) {
  await open(invite(), lang);
  await start();
  await p.waitForFunction(() => document.querySelector('[data-testid="test-surface"]').dataset.phase === "waiting");
  await p.keyboard.press("Space");
  await outcome("invalid");
  assert.equal(await p.evaluate(() => document.querySelector("dialog h2").textContent), heading);
}
console.log("PASS seven localized invalid dialogs");

await open(invite());
await start();
await p.waitForSelector('dialog[open]', { timeout: 15000 });
await outcome("invalid");
assert.match(await p.evaluate(() => document.querySelector("#challenge-result-summary").textContent), /Missed green/);
await open(invite());
await start();
await p.evaluate(() => window.dispatchEvent(new Event("blur")));
await outcome("interrupted");
console.log("PASS timeout and interruption are distinct from a loss");

await open(invite(300, "advanced"));
await start();
await p.waitForSelector('dialog[open]', { timeout: 60000 });
await outcome("unscorable");
assert.equal(await p.evaluate(() => !!document.querySelector("dialog input")), false);
console.log("PASS advanced no-hit completion cannot share");

await open(invite(300, "advanced"));
await p.evaluate(() => {
  const area = document.querySelector('[data-testid="test-surface"]');
  let missed = false;
  const observer = new MutationObserver(() => {
    if (area.dataset.phase === "signal" && area.dataset.signal === "g") {
      if (!missed) { missed = true; return; }
      setTimeout(() => {
        area.dispatchEvent(new PointerEvent("pointerdown", { bubbles: true, isPrimary: true, button: 0, pointerId: 77, pointerType: "mouse" }));
        window.dispatchEvent(new PointerEvent("pointerup", { pointerId: 77 }));
      }, 50);
    }
    if (area.dataset.phase === "completed") observer.disconnect();
  });
  observer.observe(area, { attributes: true, attributeFilter: ["data-phase"] });
});
await start();
await p.waitForSelector('dialog[open]', { timeout: 60000 });
await outcome("lost");
assert.match(await p.evaluate(() => document.querySelector("dialog").textContent), /1 more correct round/);
console.log("PASS advanced accuracy beats faster reaction time");
await open(null);
assert.equal(await p.evaluate(() => !!document.querySelector("dialog")), false);
console.log("PASS solo entry excludes the friend result dialog");
const reply = { ...invite(), kind: "result", challenger: { n: "Sam", i: "mouse", r: Array(5).fill(250) } };
await p.goto(origin + "/challenge#c=" + Buffer.from(JSON.stringify(reply)).toString("base64url"));
await p.waitForSelector('text="Challenge Sam"');
assert.equal(await p.evaluate(() => !!document.querySelector("dialog")), false);
console.log("PASS incoming result uses the neutral comparison page");
