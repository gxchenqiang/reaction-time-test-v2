export interface TestRound {
  time: number; // ms
  timestamp: number; // unix timestamp
}

export interface TestSession {
  rounds: TestRound[];
  average: number;
  best: number;
  date: number;
}

const STORAGE_KEY = "rtt_history";
const TOTAL_ROUNDS = 5;

export function getReactionCategory(ms: number): string {
  // Site-defined display bands, not population norms or medical thresholds.
  if (ms < 150) return "lightning";
  if (ms < 200) return "fast";
  if (ms < 300) return "average";
  if (ms < 400) return "slow";
  return "verySlow";
}

export function saveSession(session: TestSession): void {
  try {
    const existing = loadHistory();
    existing.unshift(session);
    // Keep only last 20 sessions
    const trimmed = existing.slice(0, 20);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
  } catch {
    // localStorage not available
  }
}

export function loadHistory(): TestSession[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as TestSession[];
  } catch {
    return [];
  }
}

export function clearHistory(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}

export { TOTAL_ROUNDS };
