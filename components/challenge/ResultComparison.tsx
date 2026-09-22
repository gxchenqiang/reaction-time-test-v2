import { Mode, Snapshot } from "@/lib/challenge/rules";
import { compare } from "@/lib/challenge/scoring";
import { c } from "@/lib/challenge/strings";
import { Score } from "./Scoreboard";
export default function ResultComparison({
  mode,
  target,
  challenger,
}: {
  mode: Mode;
  target: Snapshot;
  challenger: Snapshot;
}) {
  const result = compare(
    { mode, rv: 1, score: target },
    { mode, rv: 1, score: challenger },
  );
  const sameName = target.n === challenger.n;
  const a = sameName ? `${target.n} (${c.original})` : target.n;
  const b = sameName ? `${challenger.n} (${c.challenger})` : challenger.n;
  return (
    <section
      className="rounded-2xl bg-white border border-gray-200 p-4 space-y-3"
      aria-live="polite"
    >
      <h2 className="font-bold text-lg break-words">{c.vs(a, b)}</h2>
      <div className="grid grid-cols-2 divide-x">
        <Score mode={mode} score={target} label={a} />
        <Score mode={mode} score={challenger} label={b} />
      </div>
      <p className="text-xl font-black">
        {result.reason === "not_comparable"
          ? c.notComparable
          : result.reason === "tie"
            ? c.tie
            : c.wins(result.winner === "a" ? a : b)}
      </p>
      <p className="text-sm text-gray-600">
        {result.reason === "faster"
          ? c.faster(result.difference)
          : result.reason === "more_correct"
            ? c.moreCorrect(result.difference)
            : result.reason === "tie"
              ? c.tieReason
              : ""}
      </p>
      <p className="text-xs text-gray-500">
        {c.input(target.i)} · {c.input(challenger.i)}
      </p>
      {target.i !== challenger.i && (
        <p className="text-sm text-gray-600">{c.differentInput}</p>
      )}
    </section>
  );
}
