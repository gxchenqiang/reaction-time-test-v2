"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { Engine, State, active } from "@/lib/challenge/engine";
import {
  createId,
  Mode,
  Payload,
  RULES_V1,
  Snapshot,
  Trial,
} from "@/lib/challenge/rules";
import {
  challengeUrl,
  LinkError,
  LinkErrorCode,
  normalizeName,
  parseHash,
  validatePayload,
} from "@/lib/challenge/codec";
import { computeStats, shareable } from "@/lib/challenge/scoring";
import {
  HistoryRun,
  loadHistory,
  loadProfile,
  saveProfile,
  saveRun,
} from "@/lib/challenge/storage";
import { onceOpen, trackEvent } from "@/lib/challenge/analytics";
import { copyLink, nativeShare } from "@/lib/challenge/sharing";
import { challengeStrings } from "@/lib/challenge/strings";
import { Lang, getLangPath, LANG_HREFLANG } from "@/lib/i18n";
import Scoreboard from "./Scoreboard";
import ResultComparison from "./ResultComparison";
import SharePanel from "./SharePanel";

const initial = (mode: Mode): State => ({
  mode,
  phase: "idle",
  records: [],
  signal: null,
  release: false,
  input: null,
});
export default function ChallengeApp({ lang }: { lang: Lang }) {
  const c = challengeStrings(lang);
  const [mode, setMode] = useState<Mode>("classic");
  const [payload, setPayload] = useState<Payload | null>(null);
  const [error, setError] = useState<LinkErrorCode | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [context, setContext] = useState(0);
  const [state, setState] = useState<State>(initial("classic"));
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [storageError, setStorageError] = useState(false);
  const [history, setHistory] = useState<HistoryRun[]>([]);
  const [shareStatus, setShareStatus] = useState("");
  const [shared, setShared] = useState<Payload | null>(null);
  const engine = useRef<Engine | null>(null);
  const surface = useRef<HTMLDivElement>(null);
  const runId = useRef("");
  const stored = useRef("");
  const restoring = useRef<HistoryRun | null>(null);
  const target = payload?.kind === "invite" ? payload.target : undefined;

  const readLocation = useCallback(() => {
    engine.current?.abort();
    engine.current?.dispose();
    setShared(null);
    setError(null);
    setNameError(false);
    try {
      const next = parseHash(location.hash);
      const nextMode =
        next?.mode ??
        (new URLSearchParams(location.search).get("mode") === "advanced"
          ? "advanced"
          : "classic");
      setPayload(next);
      setMode(nextMode);
      setState(initial(nextMode));
      if (next?.kind === "invite")
        onceOpen(location.hash, {
          mode: next.mode,
          rulesVersion: 1,
          entry: "invite",
        });
    } catch (e) {
      setPayload(null);
      setError(e instanceof LinkError ? e.code : "invalid");
    }
    setContext((x) => x + 1);
    setLoaded(true);
  }, []);
  useEffect(() => {
    readLocation();
    setName(loadProfile());
    setHistory(loadHistory());
    window.addEventListener("hashchange", readLocation);
    window.addEventListener("popstate", readLocation);
    return () => {
      window.removeEventListener("hashchange", readLocation);
      window.removeEventListener("popstate", readLocation);
    };
  }, [readLocation]);
  useEffect(() => {
    if (!loaded) return;
    const game = new Engine(mode, (next) => {
      // Signal DOM is committed inside rAF before the engine samples performance.now().
      if (next.phase === "signal") flushSync(() => setState(next));
      else setState(next);
      if (next.phase === "invalid" || next.phase === "aborted")
        trackEvent(next.phase === "invalid" ? "test_invalid" : "test_abort", {
          mode,
          rulesVersion: 1,
          entry: target ? "invite" : "solo",
        });
    });
    engine.current = game;
    if (restoring.current) {
      const run = restoring.current;
      restoring.current = null;
      runId.current = run.runId;
      stored.current = run.runId;
      setName(run.score.n);
      setState({
        ...initial(run.mode),
        phase: "completed",
        input: run.score.i,
        records: run.score.r,
      });
    }
    const up = (e: PointerEvent) => game.up(`pointer:${e.pointerId}`);
    const keyUp = (e: KeyboardEvent) => {
      if (e.code === "Space") game.up("space");
    };
    const hide = () => {
      if (document.hidden) game.abort();
    };
    const abort = () => game.abort();
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    window.addEventListener("keyup", keyUp);
    window.addEventListener("blur", abort);
    window.addEventListener("pagehide", abort);
    window.addEventListener("pageshow", hide);
    document.addEventListener("visibilitychange", hide);
    return () => {
      game.dispose();
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
      window.removeEventListener("keyup", keyUp);
      window.removeEventListener("blur", abort);
      window.removeEventListener("pagehide", abort);
      window.removeEventListener("pageshow", hide);
      document.removeEventListener("visibilitychange", hide);
    };
  }, [mode, context, loaded, target]);
  useEffect(() => {
    if (
      state.phase !== "completed" ||
      !runId.current ||
      stored.current === runId.current
    )
      return;
    stored.current = runId.current;
    let nickname = "Player";
    try {
      nickname = normalizeName(name);
    } catch {
      /* Invalid optional nickname does not discard a completed run. */
    }
    const score: Snapshot = {
      n: nickname,
      i: state.input ?? "mixed",
      r: state.records,
    };
    const run: HistoryRun = {
      mode,
      rv: 1,
      runId: runId.current,
      completedAt: Date.now(),
      score,
    };
    if (!saveRun(run)) setStorageError(true);
    setHistory((previous) =>
      [run, ...previous.filter((x) => x.runId !== run.runId)].slice(0, 50),
    );
    trackEvent("test_complete", {
      mode,
      rulesVersion: 1,
      input: score.i,
      entry: target ? "invite" : "solo",
    });
    if (target && shareable(mode, score))
      trackEvent("challenge_complete", {
        mode,
        rulesVersion: 1,
        input: score.i,
      });
  }, [state, mode, name, target]);

  function navigate(next?: Payload, nextMode: Mode = mode) {
    historyPush(
      next
        ? challengeUrl(next, location.origin, lang)
        : `${getLangPath(lang, "/challenge")}${nextMode === "advanced" ? "?mode=advanced" : ""}`,
    );
  }
  function historyPush(url: string) {
    window.history.pushState(null, "", url);
    window.dispatchEvent(new Event("challengecontextchange"));
    readLocation();
    window.scrollTo({ top: 0, behavior: "instant" });
  }
  function start() {
    setShared(null);
    runId.current = createId();
    engine.current?.start();
    surface.current?.focus({ preventScroll: true });
    trackEvent("test_start", {
      mode,
      rulesVersion: 1,
      entry: target ? "invite" : "solo",
    });
  }
  function restore(run: HistoryRun) {
    restoring.current = run;
    navigate(undefined, run.mode);
  }
  function rematch(score: Snapshot, nextMode = mode) {
    trackEvent("rematch_start", { mode: nextMode, rulesVersion: 1 });
    navigate(
      validatePayload({
        v: 1,
        rv: 1,
        mode: nextMode,
        id: createId(),
        kind: "invite",
        target: score,
      }),
    );
  }
  async function generate(reply: boolean) {
    try {
      const nickname = normalizeName(name);
      setNameError(false);
      const score: Snapshot = {
        n: nickname,
        i: state.input ?? "mixed",
        r: state.records,
      };
      const next = validatePayload(
        reply && target && payload
          ? {
              v: 1,
              rv: 1,
              mode,
              id: payload.id,
              kind: "result",
              target,
              challenger: score,
            }
          : {
              v: 1,
              rv: 1,
              mode,
              id: createId(),
              kind: "invite",
              target: score,
            },
      );
      const url = challengeUrl(next, location.origin, lang);
      setShareStatus("");
      setShared(next);
      if (!saveProfile(nickname)) setStorageError(true);
      const fields = { mode, rulesVersion: 1 as const };
      trackEvent(
        next.kind === "result"
          ? "result_link_created"
          : "challenge_link_created",
        fields,
      );
      if (reply) {
        if (typeof navigator.share === "function") {
          trackEvent("share_attempt", fields);
          const result = await nativeShare(url, next, lang);
          if (result === "cancelled") trackEvent("share_cancelled", fields);
          else {
            setShareStatus(c[result]);
            if (result === "shareResolved")
              trackEvent("share_resolved", fields);
          }
        } else {
          const result = await copyLink(url);
          setShareStatus(c[result]);
          if (result === "copied") trackEvent("result_link_copied", fields);
        }
      }
    } catch {
      setNameError(true);
    }
  }
  if (!loaded) return <p className="text-center py-4">{c.loading}</p>;
  if (error)
    return (
      <div className="rounded-xl border p-6 space-y-4" role="alert">
        <p>{c[error]}</p>
        <button className="challenge-primary" onClick={() => navigate()}>
          {c.newChallenge}
        </button>
      </div>
    );
  if (payload?.kind === "result")
    return (
      <div className="space-y-4">
        <p className="text-sm text-gray-500">
          {c[mode]} · {c.rounds(RULES_V1[mode].rounds)}
        </p>
        <ResultComparison
          lang={lang}
          mode={mode}
          target={payload.target}
          challenger={payload.challenger}
        />
        <div className="flex flex-wrap gap-2">
          <button
            className="challenge-primary"
            onClick={() => rematch(payload.challenger)}
          >
            {c.challengeName(payload.challenger.n)}
            {payload.target.n === payload.challenger.n
              ? ` (${c.challenger})`
              : ""}
          </button>
          <button
            className="challenge-secondary"
            onClick={() => rematch(payload.target)}
          >
            {c.challengeName(payload.target.n)}
            {payload.target.n === payload.challenger.n
              ? ` (${c.original})`
              : ""}
          </button>
        </div>
      </div>
    );

  const current: Snapshot = {
    n: name.trim() || "Player",
    i: state.input ?? "mixed",
    r: state.records,
  };
  const stats = computeStats(mode, state.records);
  const playing = active(state.phase),
    complete = state.phase === "completed";
  const canShare = complete && shareable(mode, current);
  const last = state.records[state.records.length - 1];
  const feedback =
    mode === "classic"
      ? c.ms(typeof last === "number" ? last * 10 : null)
      : last
        ? { h: c.hit, w: c.withhold, e: c.early, f: c.falseAlarm, m: c.miss }[
            (last as Trial)[1]
          ]
        : "";
  const signalLabel = state.release
    ? c.release
    : state.phase === "waiting"
      ? c.wait
      : state.phase === "signal"
        ? state.signal === "g"
          ? c.go
          : c.hold
        : state.phase === "ready"
          ? c.ready
          : state.phase === "feedback"
            ? feedback
            : state.phase === "invalid"
              ? state.reason === "early"
                ? c.earlyClassic
                : c.timeout
              : state.phase === "aborted"
                ? c.aborted
                : complete
                  ? c.completed
                  : c.idle;
  const color =
    state.phase === "waiting"
      ? "bg-red-600 text-white"
      : state.phase === "signal"
        ? state.signal === "g"
          ? "bg-green-600 text-white"
          : "bg-orange-400 text-gray-950"
        : "bg-gray-100 text-gray-900";
  return (
    <div className="space-y-4">
      <div>
        {target ? (
          <>
            <h2
              className="text-xl font-bold truncate"
              title={c.invited(target.n)}
            >
              {c.invited(target.n)}
            </h2>
            <p className="text-sm text-gray-500">
              {c[mode]} · {c.rounds(RULES_V1[mode].rounds)}
            </p>
          </>
        ) : (
          <div role="group" aria-label={c.modeSelect} className="flex gap-2">
            {(["classic", "advanced"] as const).map((m) => (
              <button
                key={m}
                aria-pressed={m === mode}
                className={
                  m === mode ? "challenge-primary" : "challenge-secondary"
                }
                onClick={() => navigate(undefined, m)}
              >
                {c[m]}
              </button>
            ))}
          </div>
        )}
        <p className="text-sm text-gray-600 mt-2">
          {mode === "classic" ? c.classicRules : c.advancedRules}
        </p>
      </div>
      <Scoreboard lang={lang} mode={mode} target={target} current={current} />
      <div
        ref={surface}
        role="button"
        tabIndex={0}
        aria-label={c.area}
        aria-disabled={!playing}
        data-testid="test-surface"
        data-phase={state.phase}
        data-signal={state.signal ?? ""}
        className={`min-h-[220px] sm:min-h-[280px] rounded-2xl flex flex-col items-center justify-center text-center p-6 select-none touch-manipulation ${color}`}
        onPointerDown={(e) => {
          if (!e.isPrimary || e.button !== 0) return;
          e.currentTarget.focus({ preventScroll: true });
          engine.current?.down(
            `pointer:${e.pointerId}`,
            e.pointerType === "touch"
              ? "touch"
              : e.pointerType === "pen"
                ? "pen"
                : "mouse",
          );
        }}
        onKeyDown={(e) => {
          if (
            e.code !== "Space" ||
            e.repeat ||
            e.target !== e.currentTarget ||
            !playing
          )
            return;
          e.preventDefault();
          engine.current?.down("space", "keyboard");
        }}
      >
        <p
          className={`${playing ? "text-3xl sm:text-4xl" : "text-xl"} font-black`}
        >
          {signalLabel}
        </p>
        {(state.phase === "ready" || state.phase === "waiting") && (
          <p className="text-sm mt-3">
            {c.dontClick} · {c.clickGreen}
          </p>
        )}
        {state.phase === "signal" && (
          <p className="text-sm mt-3">
            {state.signal === "n" ? c.dontClick : c.clickOnce}
          </p>
        )}
        {state.phase === "feedback" && (
          <p className="text-sm mt-3">{c.nextGreen}</p>
        )}
        {state.phase === "invalid" && state.reason === "early" && (
          <p className="text-sm mt-3">{c.earlyRound(stats.completed + 1)}</p>
        )}
      </div>
      <div className="flex justify-between gap-3 text-xs sm:text-sm text-gray-500">
        <span>
          {c.round(
            Math.min(
              state.phase === "feedback"
                ? stats.completed
                : stats.completed + 1,
              RULES_V1[mode].rounds,
            ),
            RULES_V1[mode].rounds,
          )}
        </span>
        <span>{c.controls}</span>
      </div>
      <p className="text-sm text-gray-600">{c.autoRounds}</p>
      {!playing && (
        <button className="challenge-primary w-full" onClick={start}>
          {state.phase === "idle" ? (target ? c.start : c.startTest) : c.retry}
        </button>
      )}
      {complete && (
        <div className="space-y-4">
          {target && canShare && (
            <ResultComparison
              lang={lang}
              mode={mode}
              target={target}
              challenger={current}
            />
          )}
          <section
            className="rounded-xl bg-white border border-gray-200 p-4 space-y-2"
            aria-live="polite"
          >
            <h2 className="font-bold">{c.result}</h2>
            <p className="text-xl font-black">{c.ms(stats.score10)}</p>
            {mode === "advanced" && (
              <>
                <p>
                  {c.correct(stats.correct, 20)} ·{" "}
                  {c.accuracy(stats.correct * 5)}
                </p>
                <p className="text-sm text-gray-600">
                  {c.errors(stats.early, stats.falseAlarm, stats.miss)}
                </p>
              </>
            )}
            <p className="text-xs text-gray-500">{c.input(current.i)}</p>
          </section>
          {canShare ? (
            <>
              <label className="block text-sm font-medium">
                {c.nickname}
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setShared(null);
                    setNameError(false);
                  }}
                  className="block mt-1 w-full border border-gray-300 rounded-lg p-3"
                  aria-describedby="name-help"
                />
              </label>
              <p id="name-help" className="text-xs text-gray-500">
                {c.nameHelp}
              </p>
              {nameError && (
                <p role="alert" className="text-red-700 text-sm">
                  {c.nameError}
                </p>
              )}
              <div className="flex flex-wrap gap-2">
                <button
                  className="challenge-primary"
                  onClick={() => generate(!!target)}
                >
                  {target ? c.sendResult(target.n) : c.challengeFriend}
                </button>
                {target && (
                  <button
                    className="challenge-secondary"
                    onClick={() => generate(false)}
                  >
                    {c.another}
                  </button>
                )}
              </div>
              {shared && (
                <SharePanel
                  lang={lang}
                  payload={shared}
                  initialStatus={shareStatus}
                />
              )}
            </>
          ) : (
            <p>{c.noHits}</p>
          )}
        </div>
      )}
      {storageError && (
        <p role="status" className="text-xs text-gray-500">
          {c.storageError}
        </p>
      )}
      {!playing && history.length > 0 && (
        <details className="text-sm text-gray-600">
          <summary className="cursor-pointer py-2">{c.history}</summary>
          <ul className="space-y-2 mt-2">
            {history.slice(0, 5).map((h) => (
              <li
                key={h.runId}
                className="border rounded-lg p-3 flex flex-wrap items-center justify-between gap-2"
              >
                <span>
                  {c[h.mode]} · {c.ms(computeStats(h.mode, h.score.r).score10)}{" "}
                  ·{" "}
                  {new Date(h.completedAt).toLocaleDateString(
                    LANG_HREFLANG[lang],
                  )}
                </span>
                <button className="underline" onClick={() => restore(h)}>
                  {c.restore}
                </button>
              </li>
            ))}
          </ul>
        </details>
      )}
    </div>
  );
}
