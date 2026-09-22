import { isInput, Mode, Snapshot, Trial } from "./rules";
export function meanScore10(times: readonly number[]): number | null {
  return times.length
    ? Math.round((times.reduce((s, t) => s + t, 0) * 10) / times.length)
    : null;
}
const time = (v: unknown, max: number): v is number =>
  typeof v === "number" && Number.isInteger(v) && v >= 0 && v < max;
export function validTrials(mode: Mode, records: unknown): boolean {
  if (!Array.isArray(records)) return false;
  if (mode === "classic")
    return records.length === 5 && records.every((v) => time(v, 5000));
  if (records.length !== 20) return false;
  if (
    !records.every(
      (t) =>
        Array.isArray(t) &&
        ((t.length === 3 && t[0] === "g" && t[1] === "h" && time(t[2], 1000)) ||
          (t.length === 2 &&
            ((t[0] === "g" && ["m", "e"].includes(t[1])) ||
              (t[0] === "n" && ["w", "f", "e"].includes(t[1]))))),
    )
  )
    return false;
  return records.filter((t) => t[0] === "g").length === 12;
}
export function computeStats(mode: Mode, records: Snapshot["r"]) {
  const trials = records as Trial[];
  const count = (outcome: string) =>
    trials.filter((t) => t[1] === outcome).length;
  const hit = mode === "classic" ? records.length : count("h");
  const withhold = mode === "classic" ? 0 : count("w");
  return {
    completed: records.length,
    hit,
    withhold,
    correct: hit + withhold,
    early: mode === "classic" ? 0 : count("e"),
    falseAlarm: mode === "classic" ? 0 : count("f"),
    miss: mode === "classic" ? 0 : count("m"),
    score10: meanScore10(
      mode === "classic"
        ? (records as number[])
        : trials.flatMap((t) => (t[1] === "h" ? [t[2]] : [])),
    ),
  };
}
export function shareable(mode: Mode, snapshot: Snapshot): boolean {
  return (
    isInput(snapshot.i) &&
    validTrials(mode, snapshot.r) &&
    computeStats(mode, snapshot.r).score10 !== null
  );
}
export function compare(
  a: { mode: Mode; rv: number; score: Snapshot },
  b: { mode: Mode; rv: number; score: Snapshot },
) {
  if (
    a.mode !== b.mode ||
    a.rv !== 1 ||
    b.rv !== 1 ||
    !shareable(a.mode, a.score) ||
    !shareable(b.mode, b.score)
  )
    return { winner: null, reason: "not_comparable", difference: 0 } as const;
  const x = computeStats(a.mode, a.score.r),
    y = computeStats(b.mode, b.score.r);
  if (a.mode === "advanced" && x.correct !== y.correct)
    return {
      winner: x.correct > y.correct ? "a" : "b",
      reason: "more_correct",
      difference: Math.abs(x.correct - y.correct),
    } as const;
  if (x.score10 === y.score10)
    return { winner: null, reason: "tie", difference: 0 } as const;
  return {
    winner: x.score10! < y.score10! ? "a" : "b",
    reason: "faster",
    difference: Math.abs(x.score10! - y.score10!) / 10,
  } as const;
}
