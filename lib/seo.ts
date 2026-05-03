import {
  DEFAULT_LANG,
  LANG_HREFLANG,
  Lang,
  SUPPORTED_LANGS,
  getLangPath,
} from "./i18n";

export const BASE_URL = "https://reactiontimetestonline.com";
export const SITE_NAME = "Reaction Time Test Online";
export const SITE_LOGO_URL = `${BASE_URL}/favicon-preview.png`;

export function absoluteUrl(path: string): string {
  return `${BASE_URL}${path}`;
}

export function canonicalUrl(lang: Lang, path: string = ""): string {
  return absoluteUrl(getLangPath(lang, path));
}

export function languageAlternates(path: string = ""): Record<string, string> {
  return {
    ...Object.fromEntries(
      SUPPORTED_LANGS.map((lang) => [
        LANG_HREFLANG[lang],
        canonicalUrl(lang, path),
      ])
    ),
    "x-default": canonicalUrl(DEFAULT_LANG, path),
  };
}

export function inLanguage(lang: Lang): string {
  return LANG_HREFLANG[lang];
}

export function organizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: SITE_NAME,
    url: BASE_URL,
    logo: SITE_LOGO_URL,
  };
}
