import { InputKind, Mode } from "./rules";
export type EventName =
  | "pageview"
  | "challenge_open"
  | "test_start"
  | "test_complete"
  | "test_invalid"
  | "test_abort"
  | "challenge_link_created"
  | "challenge_link_copied"
  | "share_attempt"
  | "share_resolved"
  | "share_cancelled"
  | "challenge_complete"
  | "result_link_created"
  | "result_link_copied"
  | "rematch_start";
type Fields = {
  mode?: Mode;
  rulesVersion?: 1;
  entry?: "solo" | "invite" | "result";
  result?: string;
  input?: InputKind;
};
const opened = new Set<string>();
export function onceOpen(token: string, fields: Fields) {
  if (opened.has(token)) return;
  opened.add(token);
  trackEvent("challenge_open", fields);
}
/** Same Pageview/Plausible endpoint as the old SDK, but never sends query/hash or arbitrary props. */
export function trackEvent(name: EventName, fields: Fields = {}) {
  if (
    typeof window === "undefined" ||
    /^(localhost|127\.|\[::1\])/.test(location.hostname)
  )
    return;
  try {
    if (localStorage.getItem("plausible_ignore") === "true") return;
  } catch {
    /* Storage is optional. */
  }
  try {
    const props = {
      mode: fields.mode,
      rulesVersion: fields.rulesVersion,
      entry: fields.entry,
      result: fields.result,
      input: fields.input,
    };
    const referrer = document.referrer ? new URL(document.referrer) : null;
    const data = {
      n: name,
      u: location.origin + location.pathname,
      d: "reactiontimetestonline.com",
      r: referrer ? referrer.origin + referrer.pathname : null,
      p: props,
    };
    void fetch("https://app.pageview.app/api/event", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(data),
      keepalive: true,
    }).catch(() => {});
  } catch {
    /* Analytics must never interrupt a test. */
  }
}
