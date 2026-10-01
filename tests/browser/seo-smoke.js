// In ego-browser nodejs, set globalThis.seoSmokeConfig to the existing spaceId,
// page and base URL, then import this file. Ego's remote Node process does not
// inherit environment variables from the invoking shell.
const config = globalThis.seoSmokeConfig || {};
const spaceId = Number(config.spaceId);
if (!spaceId) throw new Error("Set RTT_BROWSER_SPACE to the existing task space.");
const task = await taskSpace(spaceId);
const page = task.page(config.page || "p2");
const base = config.base || "http://localhost:8788";
const assert = (condition, message) => { if (!condition) throw new Error(message); };
await page.goto(base);
await page.waitForSelector('[data-phase="idle"]');
await page.evaluate(() => {
  // Keep the random wait at the real minimum for a repeatable UI smoke test.
  Math.random = () => 0;
  window.seoSmokeErrors = [];
  addEventListener("error", (event) => window.seoSmokeErrors.push(event.message));
});
const before = await page.evaluate(() => {
  const details = [...document.querySelectorAll("#faq details")];
  const nodes = [...document.querySelectorAll('script[type="application/ld+json"]')]
    .flatMap((el) => { const json = JSON.parse(el.textContent); return json["@graph"] || [json]; });
  const questions = nodes.find((node) => node["@type"] === "FAQPage")?.mainEntity || [];
  return {
    faqs: details.length,
    closed: details.every((el) => !el.open),
    schemaMatches: questions.length === details.length && details.every((el, i) =>
      el.querySelector("summary")?.textContent.trim() === questions[i].name &&
      el.querySelector("p")?.textContent.trim() === questions[i].acceptedAnswer?.text),
    transition: getComputedStyle(document.querySelector("[data-phase]")).transitionDuration,
    links: [...document.querySelectorAll("main a")].map((a) => a.getAttribute("href")),
  };
});
assert(before.faqs === 3 && before.closed && before.schemaMatches, "FAQ count, initial state, or structured data mismatch");
assert(before.transition === "0s", "Signal must change without a color transition");
assert(before.links.includes("/blog/what-is-reaction-time"), "Missing useful home-to-guide link");
await page.click("loc=css:details summary >> nth=0");
assert(await page.evaluate(() => document.querySelector("details").open), "FAQ does not open");
await page.focus("loc=css:#faq summary >> nth=0");
await page.keyboard.press("Enter");
assert(await page.evaluate(() => !document.querySelector("details").open), "FAQ does not close with keyboard");
await page.keyboard.press("Space");
assert(await page.evaluate(() => document.querySelector("details").open), "FAQ does not open with keyboard");
await page.focus('[data-phase="idle"]');
await page.keyboard.press("Space");
await page.waitForSelector('[data-phase="waiting"]');
await page.evaluate(() => document.activeElement.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", repeat: true, bubbles: true, cancelable: true })));
assert(await page.evaluate(() => document.querySelector("[data-phase]")?.getAttribute("data-phase") === "waiting"), "Repeated key triggered a false start");
await page.keyboard.press("Enter");
await page.waitForSelector('[data-phase="tooSoon"]');
await page.keyboard.press("Space");
for (let round = 0; round < 5; round++) {
  await page.waitForSelector('[data-phase="go"]', { timeout: 8000 });
  await page.keyboard.press(round % 2 ? "Enter" : "Space");
  if (round < 4) {
    await page.waitForSelector('text=Next Round');
    assert(await page.evaluate(() => document.activeElement?.textContent.includes("Next Round")), "Focus lost after keyboard response");
    await page.evaluate(() => document.activeElement.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", repeat: true, bubbles: true, cancelable: true })));
    assert(await page.evaluate(() => document.activeElement?.textContent.includes("Next Round")), "Held key unexpectedly advanced to next round");
    await page.keyboard.press("Enter");
  }
}
await page.waitForSelector('text="Play Again"');
await page.waitForSelector(".recharts-wrapper", { timeout: 15000 });
assert(await page.evaluate(() => document.activeElement?.getAttribute("role") === "region"), "Final score did not receive focus");
const result = await page.evaluate(() => ({
  text: document.querySelector("main").innerText,
  errors: window.seoSmokeErrors,
}));
assert(!/faster than \d+% of people/.test(result.text), "Fabricated percentile remains visible");
assert(result.errors.length === 0, result.errors.join("; "));
await page.click('text="Play Again"');
assert(await page.evaluate(() => document.activeElement?.getAttribute("data-phase") === "idle"), "Reset did not restore keyboard focus");
await page.goto(base + "/ja/blog/what-is-reaction-time");
assert((await page.url()).includes("/ja/blog/"), "Translated blog redirected to English");
assert(await page.evaluate(() => document.documentElement.lang === "ja" && !!document.querySelector("#article-sources")), "Translated article language or sources missing");
await page.click('footer a[href="/"]');
await page.waitForURL(base + "/");
await page.waitForFunction(() => document.documentElement.lang === "en");
await page.click('footer a[href="/zh"]');
await page.waitForURL(base + "/zh");
await page.waitForFunction(() => document.documentElement.lang === "zh-CN");
await page.goto(base + "/contact");
assert(await page.evaluate(() => !document.querySelector("form") && !!document.querySelector('a[href="mailto:support@reactiontimetestonline.com"]')), "Contact still has a fake form or missing email link");
console.log(JSON.stringify({ passed: true, checks: ["FAQ content and disclosure", "instant visual cue", "early response", "Space and Enter five-round flow", "focus recovery", "repeat-key suppression", "truthful results", "Japanese article", "client navigation language", "contact email"], errors: result.errors }, null, 2));
