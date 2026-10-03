"use client";
import { Lang } from "@/lib/i18n";
import { Payload, Snapshot } from "@/lib/challenge/rules";
import { challengeStrings } from "@/lib/challenge/strings";
import SharePanel from "./SharePanel";

export default function ChallengeShareControls({
  lang, idPrefix, name, nameError, target, shared, shareStatus, onNameChange, onGenerate,
}: {
  lang: Lang;
  idPrefix: string;
  name: string;
  nameError: boolean;
  target?: Snapshot;
  shared: Payload | null;
  shareStatus: string;
  onNameChange: (value: string) => void;
  onGenerate: (reply: boolean) => void;
}) {
  const c = challengeStrings(lang);
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium">
        {c.nickname}
        <input
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          className="block mt-1 w-full border border-gray-300 rounded-lg p-3"
          aria-invalid={nameError}
          aria-describedby={`${idPrefix}-name-help${nameError ? ` ${idPrefix}-name-error` : ""}`}
        />
      </label>
      <p id={`${idPrefix}-name-help`} className="text-xs text-gray-500">{c.nameHelp}</p>
      {nameError && <p id={`${idPrefix}-name-error`} role="alert" className="text-red-700 text-sm">{c.nameError}</p>}
      <div className="flex flex-wrap gap-2">
        <button className="challenge-primary break-words" onClick={() => onGenerate(!!target)}>
          {target ? c.sendResult(target.n) : c.challengeFriend}
        </button>
        {target && <button className="challenge-secondary" onClick={() => onGenerate(false)}>{c.another}</button>}
      </div>
      {shared && <SharePanel lang={lang} payload={shared} initialStatus={shareStatus} />}
    </div>
  );
}
