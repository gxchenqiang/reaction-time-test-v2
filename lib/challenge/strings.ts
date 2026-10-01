import { Lang } from "../i18n";
import { en } from "./locales/en";
import { zh } from "./locales/zh";
import { ja } from "./locales/ja";
import { ko } from "./locales/ko";
import { de } from "./locales/de";
import { fr } from "./locales/fr";
import { vi } from "./locales/vi";

export type ChallengeStrings = typeof en;
const dictionaries: Record<Lang, ChallengeStrings> = { en, zh, ja, ko, de, fr, vi };
export function challengeStrings(lang: Lang = "en"): ChallengeStrings {
  return dictionaries[lang];
}
