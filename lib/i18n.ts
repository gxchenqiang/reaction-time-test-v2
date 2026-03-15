export const SUPPORTED_LANGS = ["en", "zh", "ko", "ja", "de", "fr"] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];
export const DEFAULT_LANG: Lang = "en";

export function isValidLang(lang: string): lang is Lang {
  return SUPPORTED_LANGS.includes(lang as Lang);
}

export const LANG_LABELS: Record<Lang, string> = {
  en: "English",
  zh: "中文",
  ko: "한국어",
  ja: "日本語",
  de: "Deutsch",
  fr: "Français",
};

export const LANG_HREFLANG: Record<Lang, string> = {
  en: "en",
  zh: "zh-CN",
  ko: "ko",
  ja: "ja",
  de: "de",
  fr: "fr",
};

export function getLangPath(lang: Lang, path: string = ""): string {
  const base = lang === DEFAULT_LANG ? "" : `/${lang}`;
  return `${base}${path || "/"}`;
}
