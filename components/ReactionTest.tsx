"use client";

import { useState, useEffect, useLayoutEffect, useRef, useCallback } from "react";
import { Translations } from "@/lib/translations";
import {
  getReactionCategory,
  saveSession,
  loadHistory,
  clearHistory,
  TOTAL_ROUNDS,
  TestSession,
  TestRound,
} from "@/lib/stats";
import { Lang } from "@/lib/i18n";
import ResultsPanel from "./ResultsPanel";
import dynamic from "next/dynamic";

const HistoryChart = dynamic(() => import("./HistoryChart"), {
  ssr: false,
  loading: () => <div className="h-[180px]" aria-hidden="true" />,
});

type TestPhase =
  | "idle"
  | "waiting"
  | "go"
  | "tooSoon"
  | "result"
  | "done";

interface ReactionTestProps {
  t: Translations;
  lang: Lang;
}

export default function ReactionTest({ t, lang }: ReactionTestProps) {
  const [phase, setPhase] = useState<TestPhase>("idle");
  const [rounds, setRounds] = useState<TestRound[]>([]);
  const [lastTime, setLastTime] = useState<number | null>(null);
  const [history, setHistory] = useState<TestSession[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const testAreaRef = useRef<HTMLDivElement>(null);
  const nextRoundRef = useRef<HTMLButtonElement>(null);
  const restoreFocusRef = useRef(false);

  useEffect(() => {
    const h = loadHistory();
    setHistory(h);
    if (h.length > 0) setShowHistory(true);
  }, []);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startWaiting = useCallback(() => {
    startTimeRef.current = null;
    setPhase("waiting");
    clearTimer();
    const delay = 1000 + Math.random() * 4000; // 1–5s random delay
    timerRef.current = setTimeout(() => {
      setPhase("go");
    }, delay);
  }, [clearTimer]);

  const handleClick = useCallback(() => {
    if (phase === "idle") {
      startWaiting();
      return;
    }

    if (phase === "waiting") {
      clearTimer();
      setPhase("tooSoon");
      return;
    }

    if (phase === "go" && startTimeRef.current !== null) {
      const elapsed = Math.round(performance.now() - startTimeRef.current);
      setLastTime(elapsed);
      const newRounds = [...rounds, { time: elapsed, timestamp: Date.now() }];
      setRounds(newRounds);

      if (newRounds.length >= TOTAL_ROUNDS) {
        const avg = Math.round(
          newRounds.reduce((s, r) => s + r.time, 0) / newRounds.length
        );
        const best = Math.min(...newRounds.map((r) => r.time));
        const session: TestSession = {
          rounds: newRounds,
          average: avg,
          best,
          date: Date.now(),
        };
        saveSession(session);
        setHistory(loadHistory());
        setShowHistory(true);
        setPhase("done");
      } else {
        setPhase("result");
      }
      return;
    }

    if (phase === "result") {
      startWaiting();
      return;
    }

    if (phase === "tooSoon") {
      startWaiting();
      return;
    }
  }, [phase, rounds, startWaiting, clearTimer]);

  const resetTest = useCallback(() => {
    clearTimer();
    restoreFocusRef.current = true;
    setPhase("idle");
    setRounds([]);
    setLastTime(null);
  }, [clearTimer]);

  useEffect(() => {
    return () => clearTimer();
  }, [clearTimer]);

  // Start at the DOM commit before paint. This is a browser estimate;
  // it cannot observe when the display physically emits the green frame.
  useLayoutEffect(() => {
    if (phase === "go") startTimeRef.current = performance.now();
    if (phase === "waiting") testAreaRef.current?.focus({ preventScroll: true });
    if (phase === "result") nextRoundRef.current?.focus({ preventScroll: true });
    if (phase === "idle" && restoreFocusRef.current) {
      testAreaRef.current?.focus({ preventScroll: true });
      restoreFocusRef.current = false;
    }
  }, [phase]);

  const avg =
    rounds.length > 0
      ? Math.round(rounds.reduce((s, r) => s + r.time, 0) / rounds.length)
      : null;
  const best = rounds.length > 0 ? Math.min(...rounds.map((r) => r.time)) : null;
  const category = avg !== null ? getReactionCategory(avg) : null;

  const bgColor: Record<TestPhase, string> = {
    idle: "bg-gray-100",
    waiting: "bg-red-500",
    go: "bg-green-500",
    tooSoon: "bg-yellow-400",
    result: "bg-gray-100",
    done: "bg-gray-100",
  };

  const textOnColor = phase === "waiting";

  const getCategoryLabel = () => {
    if (!category) return "";
    const map: Record<string, string> = {
      lightning: t.catLightning,
      fast: t.catFast,
      average: t.catAverage,
      slow: t.catSlow,
      verySlow: t.catVerySlow,
    };
    return map[category] || "";
  };

  const getCategoryDesc = () => {
    if (!category) return "";
    const map: Record<string, string> = {
      lightning: t.catLightningDesc,
      fast: t.catFastDesc,
      average: t.catAverageDesc,
      slow: t.catSlowDesc,
      verySlow: t.catVerySlowDesc,
    };
    return map[category] || "";
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Round indicator */}
      {phase !== "idle" && phase !== "done" && (
        <div className="flex justify-center gap-2 mb-4">
          {Array.from({ length: TOTAL_ROUNDS }).map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-colors ${
                i < rounds.length
                  ? "bg-green-500"
                  : i === rounds.length
                  ? "bg-gray-400"
                  : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      )}

      {/* Main test area */}
      {phase !== "result" && phase !== "done" && (
        <div
          ref={testAreaRef}
          onClick={handleClick}
          onKeyDown={(event) => {
            if (event.key === " " || event.key === "Enter") {
              event.preventDefault();
              if (!event.repeat) handleClick();
            }
          }}
          tabIndex={0}
          data-phase={phase}
          className={`
            relative w-full rounded-2xl cursor-pointer select-none
            flex flex-col items-center justify-center
            focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-gray-700
            ${bgColor[phase]}
            ${textOnColor ? "text-white" : "text-gray-700"}
            min-h-[280px] sm:min-h-[320px]
            shadow-lg
          `}
          role="button"
          aria-label={t.siteTitle}
        >
          {phase === "idle" && (
            <div className="text-center px-6">
              <div className="text-5xl mb-4">⚡</div>
              <p className="text-2xl font-bold text-gray-800 mb-2">
                {t.clickToStart}
              </p>
              <p className="text-gray-600 text-sm">{t.aboutTestDesc}</p>
            </div>
          )}

          {phase === "waiting" && (
            <div className="text-center px-6">
              <div className="text-5xl mb-3 animate-pulse">🔴</div>
              <p className="text-2xl font-bold">{t.testReady}</p>
            </div>
          )}

          {phase === "go" && (
            <div className="text-center px-6">
              <div className="text-5xl mb-3">🟢</div>
              <p className="text-4xl font-black tracking-wider">{t.clickNow}</p>
            </div>
          )}

          {phase === "tooSoon" && (
            <div className="text-center px-6">
              <div className="text-5xl mb-3">⚠️</div>
              <p className="text-2xl font-bold text-gray-800">
                {t.tooSoonMessage}
              </p>
              <p className="mt-4 text-sm text-gray-600">{t.tryAgain}</p>
            </div>
          )}
        </div>
      )}

      {/* Single round result */}
      {phase === "result" && lastTime !== null && (
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <p className="text-gray-500 mb-1 text-sm font-medium uppercase tracking-wide">
            {t.round} {rounds.length} / {TOTAL_ROUNDS}
          </p>
          <div className="text-6xl font-black text-gray-900 mb-1">
            {lastTime}
            <span className="text-2xl font-medium text-gray-400 ml-1">
              {t.ms}
            </span>
          </div>
          <p className="text-gray-500 mb-6">{t.yourTime}</p>
          {rounds.length < TOTAL_ROUNDS && (
            <button
              ref={nextRoundRef}
              onClick={handleClick}
              onKeyDown={(event) => {
                if (event.key === " " || event.key === "Enter") {
                  event.preventDefault();
                  if (!event.repeat) handleClick();
                }
              }}
              onKeyUp={(event) => {
                if (event.key === " " || event.key === "Enter") event.preventDefault();
              }}
              className="bg-gray-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-700 transition-colors"
            >
              {t.nextRound} ({rounds.length + 1}/{TOTAL_ROUNDS})
            </button>
          )}
        </div>
      )}

      {/* Final results */}
      {phase === "done" && avg !== null && best !== null && (
        <ResultsPanel
          t={t}
          lang={lang}
          rounds={rounds}
          avg={avg}
          best={best}
          categoryLabel={getCategoryLabel()}
          categoryDesc={getCategoryDesc()}
          onPlayAgain={resetTest}
        />
      )}

      {/* History section */}
      {(phase === "idle" || phase === "done") && (
        <div className="mt-8">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={() => setShowHistory((s) => !s)}
              aria-expanded={showHistory}
              className="min-h-8 text-gray-600 font-semibold flex items-center gap-2 hover:text-gray-900 transition-colors"
            >
              <span>{t.history}</span>
              <span className="text-xs">{showHistory ? "▲" : "▼"}</span>
            </button>
            {history.length > 0 && (
              <button
                onClick={() => {
                  clearHistory();
                  setHistory([]);
                }}
                className="min-h-8 px-2 text-xs text-red-700 hover:text-red-800 transition-colors"
              >
                {t.clearHistory}
              </button>
            )}
          </div>
          {showHistory && (
            <div className="bg-white rounded-2xl shadow-sm p-4">
              {history.length === 0 ? (
                <p className="text-gray-600 text-center py-4">{t.noHistory}</p>
              ) : (
                <HistoryChart history={history} t={t} />
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
