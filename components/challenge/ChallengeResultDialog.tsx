"use client";
import { ReactNode, useEffect, useRef } from "react";
import { Lang } from "@/lib/i18n";
import { State } from "@/lib/challenge/engine";
import { Mode, Snapshot } from "@/lib/challenge/rules";
import { compare } from "@/lib/challenge/scoring";
import { challengeStrings } from "@/lib/challenge/strings";
import ResultComparison from "./ResultComparison";

export default function ChallengeResultDialog({
  lang, mode, target, current, state, canShare, onDismiss, onRetry, children,
}: {
  lang: Lang;
  mode: Mode;
  target: Snapshot;
  current: Snapshot;
  state: State;
  canShare: boolean;
  onDismiss: () => void;
  onRetry: () => void;
  children: ReactNode;
}) {
  const c = challengeStrings(lang);
  const dialog = useRef<HTMLDialogElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const result = compare({ mode, rv: 1, score: target }, { mode, rv: 1, score: current });
  const outcome = state.phase === "invalid" ? "invalid"
    : state.phase === "aborted" ? "interrupted"
    : !canShare ? "unscorable"
    : result.reason === "tie" ? "tie"
    : result.winner === "b" ? "won" : "lost";
  const title = {
    won: c.challengeWon, lost: c.challengeLost, tie: c.challengeTied,
    invalid: c.challengeInvalid, interrupted: c.challengeInterrupted, unscorable: c.challengeUnscorable,
  }[outcome];
  const summary = outcome === "won" ? c.wonSummary(target.n)
    : outcome === "lost" ? c.lostSummary(target.n)
    : outcome === "tie" ? c.tiedSummary(target.n)
    : outcome === "invalid" ? (state.reason === "early" ? c.earlyClassic : c.timeout)
    : outcome === "interrupted" ? c.aborted : c.noHits;
  useEffect(() => {
    const element = dialog.current;
    element?.showModal();
    heading.current?.focus({ preventScroll: true });
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);
  return (
    <dialog
      ref={dialog}
      className="challenge-result-dialog w-[calc(100%-2rem)] max-w-lg max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-2xl border-0 bg-white p-5 sm:p-6 shadow-2xl"
      aria-labelledby="challenge-result-title"
      aria-describedby="challenge-result-summary"
      data-testid="challenge-result-dialog"
      data-outcome={outcome}
      onCancel={(e) => { e.preventDefault(); onDismiss(); }}
      onKeyDown={(e) => {
        if (e.key !== "Tab") return;
        const controls = Array.from(e.currentTarget.querySelectorAll<HTMLElement>(
          'button, input, textarea, select, a[href], [tabindex]',
        )).filter((element) => element.tabIndex >= 0 && !element.matches(":disabled") && element.getClientRects().length > 0);
        const first = controls[0], last = controls[controls.length - 1];
        if (e.shiftKey && (document.activeElement === first || document.activeElement === heading.current)) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }}
    >
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <h2 ref={heading} tabIndex={-1} id="challenge-result-title" className={`flex-1 text-2xl font-black focus:outline-none ${outcome === "won" ? "text-green-700" : "text-gray-900"}`}>{title}</h2>
          <button className="challenge-secondary shrink-0 !px-3 !py-2" aria-label={c.dismissResult} onClick={onDismiss}>×</button>
        </div>
        <p id="challenge-result-summary" className="text-gray-600 break-words">{summary}</p>
        {canShare && <ResultComparison lang={lang} mode={mode} target={target} challenger={current} />}
        {canShare && children}
        <div className="flex flex-wrap gap-2 border-t border-gray-100 pt-4">
          <button className={outcome === "lost" || !canShare ? "challenge-primary" : "challenge-secondary"} onClick={onRetry}>{c.retry}</button>
          {canShare && <button className="challenge-secondary" onClick={onDismiss}>{c.closeResult}</button>}
        </div>
      </div>
    </dialog>
  );
}
