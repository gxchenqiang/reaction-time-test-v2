// Run inside an active agent-owned TaskSpace:
// RTT_BROWSER_SPACE=<id> ego-browser nodejs < tests/browser/advanced-smoke.js
const spaceId = Number(process.env.RTT_BROWSER_SPACE);
if (!spaceId)
  throw new Error("Set RTT_BROWSER_SPACE to an active TaskSpace ID.");
const task = await taskSpace(spaceId),
  p = task.page("p1");
const fixture = {
  v: 1,
  rv: 1,
  mode: "advanced",
  id: "0123456789abcdef",
  kind: "invite",
  target: {
    n: "😀".repeat(20),
    i: "mouse",
    r: [
      ...Array.from({ length: 12 }, () => ["g", "h", 275]),
      ...Array.from({ length: 8 }, () => ["n", "w"]),
    ],
  },
};
await p.goto(
  "http://localhost:3000/challenge?mode=classic#c=" +
    Buffer.from(JSON.stringify(fixture)).toString("base64url"),
);
await p.waitForSelector('text="Start challenge"');
await p.evaluate(() => {
  window.rttErrors = [];
  addEventListener("error", (e) => window.rttErrors.push(e.message));
  Object.defineProperty(navigator, "share", {
    configurable: true,
    value: undefined,
  });
  Object.defineProperty(navigator, "clipboard", {
    configurable: true,
    value: undefined,
  });
  Storage.prototype.setItem = function () {
    throw new Error("Storage unavailable in browser test");
  };
  const area = document.querySelector('[data-testid="test-surface"]');
  const observer = new MutationObserver(() => {
    if (area.dataset.phase === "signal" && area.dataset.signal === "g") {
      setTimeout(() => {
        area.dispatchEvent(
          new PointerEvent("pointerdown", {
            bubbles: true,
            isPrimary: true,
            button: 0,
            pointerId: 77,
            pointerType: "touch",
          }),
        );
        window.dispatchEvent(new PointerEvent("pointerup", { pointerId: 77 }));
      }, 230);
    }
    if (area.dataset.phase === "completed") observer.disconnect();
  });
  observer.observe(area, { attributes: true, attributeFilter: ["data-phase"] });
});
await p.click('text="Start challenge"');
await p.waitForFunction(
  () =>
    document.querySelector('[data-testid="test-surface"]').dataset.phase ===
    "completed",
  undefined,
  { timeout: 60000 },
);
await p.waitForSelector('dialog[open]');
await p.fill("dialog input", "Sam");
await p.click(
  'loc=css:dialog button:text-is("Send result to ' + fixture.target.n + '")',
);
const fs = await import("node:fs/promises");
await fs.writeFile(
  "/tmp/rtt-advanced-result.txt",
  await p.evaluate(() => document.querySelector("textarea").value),
);
console.log(
  await p.evaluate(() => ({
    text: document.querySelector("main").innerText,
    errors: window.rttErrors,
    overflow: document.documentElement.scrollWidth > innerWidth,
  })),
);
console.log(await p.screenshot({ path: "/tmp/rtt-advanced-result.png" }));
