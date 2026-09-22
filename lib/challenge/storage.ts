import { normalizeName } from "./codec";
import { isInput, isMode, Mode, Snapshot } from "./rules";
import { validTrials } from "./scoring";
export type HistoryRun = {
  mode: Mode;
  rv: 1;
  runId: string;
  completedAt: number;
  score: Snapshot;
};
const HISTORY = "rtt.challenge.history.v1",
  PROFILE = "rtt.challenge.profile.v1";
export function loadProfile(): string {
  try {
    return normalizeName(localStorage.getItem(PROFILE) || "");
  } catch {
    return "";
  }
}
export function saveProfile(n: string): boolean {
  try {
    localStorage.setItem(PROFILE, normalizeName(n));
    return true;
  } catch {
    return false;
  }
}
export function loadHistory(): HistoryRun[] {
  try {
    const data: unknown = JSON.parse(localStorage.getItem(HISTORY) || "[]");
    if (!Array.isArray(data)) return [];
    return data
      .filter((x) => {
        try {
          return (
            x &&
            isMode(x.mode) &&
            x.rv === 1 &&
            /^[a-f0-9]{16}$/.test(x.runId) &&
            Number.isFinite(x.completedAt) &&
            x.score &&
            typeof x.score.n === "string" &&
            normalizeName(x.score.n) === x.score.n &&
            isInput(x.score.i) &&
            validTrials(x.mode, x.score.r)
          );
        } catch {
          return false;
        }
      })
      .slice(0, 50);
  } catch {
    return [];
  }
}
export function saveRun(run: HistoryRun): boolean {
  try {
    localStorage.setItem(
      HISTORY,
      JSON.stringify(
        [run, ...loadHistory().filter((x) => x.runId !== run.runId)].slice(
          0,
          50,
        ),
      ),
    );
    return true;
  } catch {
    return false;
  }
}
