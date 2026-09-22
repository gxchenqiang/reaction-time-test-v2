import { InputKind, Mode, RULES_V1, Snapshot, Trial } from "./rules";
export type Phase =
  | "idle"
  | "ready"
  | "waiting"
  | "signal"
  | "feedback"
  | "completed"
  | "invalid"
  | "aborted";
export type State = {
  phase: Phase;
  mode: Mode;
  records: Snapshot["r"];
  signal: "g" | "n" | null;
  release: boolean;
  input: InputKind | null;
  reason?: "early" | "timeout";
};
export interface Scheduler {
  now(): number;
  random(): number;
  delay(fn: () => void, ms: number): number;
  cancelDelay(id: number): void;
  frame(fn: () => void): number;
  cancelFrame(id: number): void;
}
export const browserScheduler: Scheduler = {
  now: () => performance.now(),
  random: () => Math.random(),
  delay: (fn, ms) => window.setTimeout(fn, ms),
  cancelDelay: (id) => clearTimeout(id),
  frame: (fn) => requestAnimationFrame(fn),
  cancelFrame: (id) => cancelAnimationFrame(id),
};
export const active = (p: Phase) =>
  ["ready", "waiting", "signal", "feedback"].includes(p);
export function plan(mode: Mode, random: () => number): ("g" | "n")[] {
  const list: ("g" | "n")[] =
    mode === "classic"
      ? Array(5).fill("g")
      : [...Array(12).fill("g"), ...Array(8).fill("n")];
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}
/** publish must synchronously commit signal styling before returning (React adapter uses flushSync). */
export class Engine {
  state: State;
  private run = 0;
  private round = 0;
  private timers = new Set<number>();
  private frames = new Set<number>();
  private held = new Set<string>();
  private sequence: ("g" | "n")[] = [];
  private signalAt = 0;
  private pending = false;
  constructor(
    mode: Mode,
    private publish: (state: State) => void,
    private clock: Scheduler = browserScheduler,
  ) {
    this.state = {
      phase: "idle",
      mode,
      records: [],
      signal: null,
      release: false,
      input: null,
    };
  }
  private emit(patch: Partial<State>) {
    this.state = { ...this.state, ...patch };
    this.publish(this.state);
  }
  private clean() {
    this.timers.forEach((id) => this.clock.cancelDelay(id));
    this.frames.forEach((id) => this.clock.cancelFrame(id));
    this.timers.clear();
    this.frames.clear();
  }
  private later(fn: () => void, ms: number, frame = false) {
    const run = this.run,
      round = this.round;
    const callback = () => {
      (frame ? this.frames : this.timers).delete(id);
      if (run === this.run && round === this.round) fn();
    };
    const id = frame
      ? this.clock.frame(callback)
      : this.clock.delay(callback, ms);
    (frame ? this.frames : this.timers).add(id);
  }
  start() {
    this.dispose();
    this.sequence = plan(this.state.mode, this.clock.random);
    this.round = 0;
    this.emit({
      phase: "ready",
      records: [],
      signal: null,
      input: null,
      reason: undefined,
      release: false,
    });
    this.later(() => this.next(), RULES_V1[this.state.mode].initialReadyMs);
  }
  private next() {
    if (this.held.size) {
      this.pending = true;
      this.emit({ release: true });
      return;
    }
    this.pending = false;
    this.round++;
    this.clean();
    this.emit({ phase: "waiting", signal: null, release: false });
    const rules = RULES_V1[this.state.mode];
    const wait =
      rules.waitMinMs +
      Math.floor(this.clock.random() * (rules.waitMaxMs - rules.waitMinMs + 1));
    this.later(
      () =>
        this.later(
          () => {
            this.emit({
              phase: "signal",
              signal: this.sequence[this.state.records.length],
            });
            this.signalAt = this.clock.now();
            this.later(() => this.timeout(), rules.responseWindowMs);
          },
          0,
          true,
        ),
      wait,
    );
  }
  private timeout() {
    if (this.state.phase !== "signal") return;
    const remaining =
      RULES_V1[this.state.mode].responseWindowMs -
      (this.clock.now() - this.signalAt);
    if (remaining > 0) {
      this.later(() => this.timeout(), remaining);
      return;
    }
    if (this.state.mode === "classic") this.invalid("timeout");
    else this.finish(this.state.signal === "g" ? ["g", "m"] : ["n", "w"]);
  }
  down(key: string, input: Exclude<InputKind, "mixed">) {
    if (!active(this.state.phase) || this.held.has(key)) return;
    const alreadyHeld = this.held.size > 0;
    this.held.add(key);
    if (alreadyHeld || !["waiting", "signal"].includes(this.state.phase))
      return;
    const nextInput =
      !this.state.input || this.state.input === input ? input : "mixed";
    // Do not publish an intermediate frame before reading the monotonic clock.
    const elapsed = this.clock.now() - this.signalAt;
    this.state = { ...this.state, input: nextInput };
    if (this.state.phase === "waiting") {
      if (this.state.mode === "classic") this.invalid("early");
      else this.finish([this.sequence[this.state.records.length], "e"]);
      return;
    }
    if (elapsed >= RULES_V1[this.state.mode].responseWindowMs) {
      this.timeout();
      return;
    }
    if (this.state.signal === "n") this.finish(["n", "f"]);
    else
      this.finish(
        this.state.mode === "classic"
          ? Math.floor(elapsed)
          : ["g", "h", Math.floor(elapsed)],
      );
  }
  up(key: string) {
    this.held.delete(key);
    if (!this.held.size && this.pending && active(this.state.phase))
      this.next();
  }
  private finish(record: number | Trial) {
    if (!["waiting", "signal"].includes(this.state.phase)) return;
    this.clean();
    this.round++;
    const records = [...this.state.records, record] as Snapshot["r"];
    const completed = records.length === RULES_V1[this.state.mode].rounds;
    this.emit({
      phase: completed ? "completed" : "feedback",
      records,
      signal: null,
    });
    if (!completed)
      this.later(() => this.next(), RULES_V1[this.state.mode].feedbackMs);
  }
  private invalid(reason: "early" | "timeout") {
    this.clean();
    this.round++;
    this.emit({ phase: "invalid", signal: null, reason });
  }
  abort() {
    if (active(this.state.phase)) {
      this.dispose();
      this.emit({ phase: "aborted", signal: null, release: false });
    }
  }
  dispose() {
    this.run++;
    this.round++;
    this.clean();
    this.held.clear();
    this.pending = false;
  }
}
