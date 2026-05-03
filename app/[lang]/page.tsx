import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isValidLang, SUPPORTED_LANGS, LANG_HREFLANG, Lang } from "@/lib/i18n";
import { canonicalUrl, languageAlternates } from "@/lib/seo";
import { t as getT } from "@/lib/translations";
import HomePageContent from "@/components/HomePageContent";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  // Exclude "en" since it uses the root route
  return SUPPORTED_LANGS.filter((l) => l !== "en").map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  if (!isValidLang(langParam) || langParam === "en") return {};

  const lang = langParam as Lang;
  const tr = getT(lang);

  return {
    title: tr.siteTitle,
    description: tr.siteDescription,
    alternates: {
      canonical: canonicalUrl(lang),
      languages: languageAlternates(),
    },
    openGraph: {
      title: tr.siteTitle,
      description: tr.siteDescription,
      url: canonicalUrl(lang),
      locale: LANG_HREFLANG[lang].replace("-", "_"),
    },
  };
}

export default async function LangHomePage({ params }: Props) {
  const { lang: langParam } = await params;
  if (!isValidLang(langParam) || langParam === "en") notFound();
  return <HomePageContent lang={langParam as Lang} />;
}
