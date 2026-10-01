import { Mode, Snapshot } from "@/lib/challenge/rules";
import { computeStats } from "@/lib/challenge/scoring";
import { challengeStrings } from "@/lib/challenge/strings";
import { Lang } from "@/lib/i18n";
export function Score({
  lang,
  mode,
  score,
  label,
  current = false,
}: {
  lang: Lang;
  mode: Mode;
  score: Snapshot;
  label: string;
  current?: boolean;
}) {
  const c = challengeStrings(lang);
  const s = computeStats(mode, score.r);
  return (
    <div className="min-w-0 p-3 sm:p-4">
      <p
        className="truncate text-xs font-semibold uppercase tracking-wide text-gray-500"
        title={label}
      >
        {label}
      </p>
      <p className="mt-1 text-xl sm:text-2xl font-black tabular-nums text-gray-900">
        {mode === "classic"
          ? c.ms(s.score10)
          : current
            ? c.currentCorrect(s.correct, s.completed)
            : c.correct(s.correct, 20)}
      </p>
      <p className="text-xs sm:text-sm text-gray-500 mt-1">
        {mode === "advanced"
          ? `${c.ms(s.score10)} · ${c.greenAverage}`
          : current
            ? c.progress(s.completed, 5)
            : c.average}
      </p>
    </div>
  );
}
export default function Scoreboard({
  lang,
  mode,
  target,
  current,
}: {
  lang: Lang;
  mode: Mode;
  target?: Snapshot;
  current: Snapshot;
}) {
  const c = challengeStrings(lang);
  return (
    <div
      className={`rounded-xl border border-gray-200 bg-white grid ${target ? "grid-cols-2 divide-x divide-gray-200" : "grid-cols-1"}`}
      data-testid="scoreboard"
    >
      {target && (
        <Score
          lang={lang}
          mode={mode}
          score={target}
          label={`${target.n} — ${c.target}`}
        />
      )}
      <Score lang={lang} mode={mode} score={current} label={c.you} current />
    </div>
  );
}
