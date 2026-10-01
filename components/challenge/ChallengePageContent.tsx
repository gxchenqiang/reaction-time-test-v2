import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChallengeApp from "./ChallengeApp";
import { Lang, getLangPath, LANG_HREFLANG } from "@/lib/i18n";
import { t } from "@/lib/translations";
import { challengeStrings } from "@/lib/challenge/strings";
import { canonicalUrl, languageAlternates, SITE_LOGO_URL } from "@/lib/seo";

export function challengeMetadata(lang: Lang): Metadata {
  const c = challengeStrings(lang);
  return {
    title: c.pageTitle,
    description: c.description,
    alternates: {
      canonical: canonicalUrl(lang, "/challenge"),
      languages: languageAlternates("/challenge"),
    },
    openGraph: {
      title: c.pageTitle,
      description: c.description,
      url: canonicalUrl(lang, "/challenge"),
      locale: LANG_HREFLANG[lang].replace("-", "_"),
      images: [SITE_LOGO_URL],
      type: "website",
    },
  };
}
export default function ChallengePageContent({ lang }: { lang: Lang }) {
  const c = challengeStrings(lang);
  return (
    <>
      <Header t={t(lang)} lang={lang} currentPath="/challenge" />
      <main className="max-w-2xl mx-auto px-4 py-5 sm:py-8">
        <h1 className="text-2xl sm:text-3xl font-black mb-2">{c.title}</h1>
        <p className="text-sm text-gray-500 mb-5">{c.description}</p>
        <ChallengeApp key={lang} lang={lang} />
        <section className="mt-8 border-t border-gray-200 pt-5 space-y-3 text-sm text-gray-500">
          <h2 className="font-bold text-gray-900">{c.rules}</h2>
          <p>{c.classicDetail}</p>
          <p>{c.advancedDetail}</p>
          <p>{c.latency}</p>
          <p>{c.privacy}</p>
          <Link href={getLangPath(lang)} className="underline">
            {c.back}
          </Link>
        </section>
      </main>
      <Footer t={t(lang)} lang={lang} challenge />
    </>
  );
}
