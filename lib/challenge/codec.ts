import { isMode, Payload, Snapshot } from "./rules";
import { shareable } from "./scoring";
export type LinkErrorCode = "invalid" | "version" | "score";
export class LinkError extends Error {
  constructor(public code: LinkErrorCode) {
    super(code);
  }
}
const bad = (code: LinkErrorCode = "invalid"): never => {
  throw new LinkError(code);
};
const forbidden =
  /[\u0000-\u001f\u007f-\u009f\u061c\u200e\u200f\u2028-\u202e\u2066-\u2069]/u;
export function normalizeName(value: string): string {
  if (forbidden.test(value)) return bad();
  const n = value.trim() || "Player";
  if ([...n].length > 20 || new TextEncoder().encode(n).length > 80)
    return bad();
  return n;
}
function object(v: unknown): v is Record<string, unknown> {
  return v !== null && typeof v === "object" && !Array.isArray(v);
}
function keys(v: Record<string, unknown>, list: string[]) {
  if (
    Object.keys(v).length !== list.length ||
    !Object.keys(v).every((k) => list.includes(k))
  )
    bad();
}
export function validatePayload(value: unknown): Payload {
  if (!object(value)) return bad();
  if (value.v !== 1 || value.rv !== 1) return bad("version");
  if (
    !isMode(value.mode) ||
    !["invite", "result"].includes(value.kind as string) ||
    typeof value.id !== "string" ||
    !/^[a-f0-9]{16}$/.test(value.id)
  )
    return bad();
  keys(value, [
    "v",
    "rv",
    "mode",
    "id",
    "kind",
    "target",
    ...(value.kind === "result" ? ["challenger"] : []),
  ]);
  for (const score of [
    value.target,
    ...(value.kind === "result" ? [value.challenger] : []),
  ]) {
    if (!object(score)) return bad("score");
    keys(score, ["n", "i", "r"]);
    if (typeof score.n !== "string" || normalizeName(score.n) !== score.n)
      return bad();
    if (!shareable(value.mode, score as Snapshot)) return bad("score");
  }
  // Copy validated data, then deeply freeze: callers cannot alter the fixed target.
  const copy = JSON.parse(JSON.stringify(value)) as Payload;
  function freeze(v: object) {
    Object.values(v).forEach((x) => {
      if (x && typeof x === "object") freeze(x);
    });
    Object.freeze(v);
  }
  freeze(copy);
  return copy;
}
export function encodeChallenge(payload: Payload): string {
  const valid = validatePayload(payload);
  const bytes = new TextEncoder().encode(JSON.stringify(valid));
  if (bytes.length > 3072) return bad();
  return btoa(Array.from(bytes, (b) => String.fromCharCode(b)).join(""))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}
export function decodeChallenge(token: string): Payload {
  try {
    if (
      !token ||
      token.length > 4096 ||
      !/^[A-Za-z0-9_-]+$/.test(token) ||
      token.length % 4 === 1
    )
      return bad();
    const raw = atob(token.replace(/-/g, "+").replace(/_/g, "/"));
    if (raw.length > 3072) return bad();
    const bytes = Uint8Array.from(raw, (c) => c.charCodeAt(0));
    const canonical = btoa(raw)
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
    if (canonical !== token) return bad();
    return validatePayload(
      JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(bytes)),
    );
  } catch (e) {
    if (e instanceof LinkError) throw e;
    return bad();
  }
}
export function parseHash(hash: string): Payload | null {
  if (!hash || hash === "#") return null;
  if (hash.length > 4100) return bad();
  const params = new URLSearchParams(hash.slice(1));
  if (!params.has("c")) return null;
  if (params.getAll("c").length !== 1 || !/^#c=[A-Za-z0-9_-]+$/.test(hash))
    return bad();
  return decodeChallenge(params.get("c")!);
}
export function challengeUrl(payload: Payload, origin: string): string {
  const url = `${origin}/challenge#c=${encodeChallenge(payload)}`;
  if (url.length >= 2000) return bad();
  return url;
}
