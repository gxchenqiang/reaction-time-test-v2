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

// Simulated global distribution (normal distribution centered at 250ms)
// Used to calculate percentile without a backend
export function calculatePercentile(ms: number): number {
  // Based on empirical data: mean ~250ms, std ~50ms
  // Using a simplified lookup table
  const distribution = [
    { ms: 100, pct: 99 },
    { ms: 150, pct: 95 },
    { ms: 175, pct: 90 },
    { ms: 200, pct: 82 },
    { ms: 225, pct: 70 },
    { ms: 250, pct: 55 },
    { ms: 275, pct: 40 },
    { ms: 300, pct: 28 },
    { ms: 350, pct: 15 },
    { ms: 400, pct: 8 },
    { ms: 500, pct: 3 },
    { ms: 600, pct: 1 },
  ];

  if (ms <= distribution[0].ms) return distribution[0].pct;
  if (ms >= distribution[distribution.length - 1].ms)
    return distribution[distribution.length - 1].pct;

  for (let i = 0; i < distribution.length - 1; i++) {
    const a = distribution[i];
    const b = distribution[i + 1];
    if (ms >= a.ms && ms <= b.ms) {
      const ratio = (ms - a.ms) / (b.ms - a.ms);
      return Math.round(a.pct + ratio * (b.pct - a.pct));
    }
  }
  return 50;
}

export function getReactionCategory(ms: number): string {
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
