import { Payload, Snapshot } from "./rules";
import { computeStats } from "./scoring";
import { c } from "./strings";
export function shareText(p: Payload) {
  const s = computeStats(p.mode, p.target.r);
  if (p.kind === "invite")
    return p.mode === "classic"
      ? c.classicInvite(c.ms(s.score10))
      : c.advancedInvite(s.correct, c.ms(s.score10));
  const label = (score: Snapshot) => {
    const stats = computeStats(p.mode, score.r);
    return `${score.n}: ${p.mode === "advanced" ? `${stats.correct}/20, ` : ""}${c.ms(stats.score10)}`;
  };
  return c.reply(label(p.challenger), label(p.target), p.mode === "advanced");
}
export async function copyLink(url: string): Promise<"copied" | "manualCopy"> {
  try {
    await navigator.clipboard.writeText(url);
    return "copied";
  } catch {
    return "manualCopy";
  }
}
export async function nativeShare(
  url: string,
  payload: Payload,
): Promise<"shareResolved" | "shareFallback" | "cancelled"> {
  try {
    await navigator.share({
      title: c.shareTitle,
      text: shareText(payload),
      url,
    });
    return "shareResolved";
  } catch (e) {
    return (e as Error)?.name === "AbortError" ? "cancelled" : "shareFallback";
  }
}
