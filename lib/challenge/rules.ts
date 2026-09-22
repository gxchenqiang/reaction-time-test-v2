export type Mode = "classic" | "advanced";
export type InputKind = "mouse" | "touch" | "keyboard" | "pen" | "mixed";
export type Trial =
  ["g", "h", number] | ["g", "m"] | ["g" | "n", "e"] | ["n", "w"] | ["n", "f"];
export type Snapshot = { n: string; i: InputKind; r: number[] | Trial[] };
export type Payload = {
  v: 1;
  rv: 1;
  mode: Mode;
  id: string;
} & (
  | { kind: "invite"; target: Snapshot }
  | { kind: "result"; target: Snapshot; challenger: Snapshot }
);
export const RULES_V1 = {
  classic: {
    rounds: 5,
    waitMinMs: 1200,
    waitMaxMs: 3000,
    responseWindowMs: 5000,
    initialReadyMs: 600,
    feedbackMs: 450,
  },
  advanced: {
    rounds: 20,
    goRounds: 12,
    noGoRounds: 8,
    waitMinMs: 600,
    waitMaxMs: 1600,
    responseWindowMs: 1000,
    initialReadyMs: 600,
    feedbackMs: 450,
  },
} as const;
export const isMode = (v: unknown): v is Mode =>
  v === "classic" || v === "advanced";
export const isInput = (v: unknown): v is InputKind =>
  ["mouse", "touch", "keyboard", "pen", "mixed"].includes(v as string);
export function createId(): string {
  return Array.from(crypto.getRandomValues(new Uint8Array(8)), (b) =>
    b.toString(16).padStart(2, "0"),
  ).join("");
}
