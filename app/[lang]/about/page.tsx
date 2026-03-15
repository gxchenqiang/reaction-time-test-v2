export const runtime = 'edge';

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isValidLang, SUPPORTED_LANGS, Lang, getLangPath, LANG_HREFLANG } from "@/lib/i18n";
import { t as getT } from "@/lib/translations";
import AboutPageContent from "@/components/AboutPageContent";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return SUPPORTED_LANGS.filter((l) => l !== "en").map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  if (!isValidLang(langParam) || langParam === "en") return {};
  const lang = langParam as Lang;
  const tr = getT(lang);
  return {
    title: tr.aboutTitle,
    description: tr.aboutDescription,
    alternates: {
      canonical: `https://reactiontimetestonline.com${getLangPath(lang, "/about")}`,
      languages: Object.fromEntries(
        SUPPORTED_LANGS.map((l) => [
          LANG_HREFLANG[l],
          `https://reactiontimetestonline.com${getLangPath(l, "/about")}`,
        ])
      ),
    },
  };
}

export default async function LangAboutPage({ params }: Props) {
  const { lang: langParam } = await params;
  if (!isValidLang(langParam) || langParam === "en") notFound();
  return <AboutPageContent lang={langParam as Lang} />;
}
