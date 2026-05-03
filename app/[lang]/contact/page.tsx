import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isValidLang, SUPPORTED_LANGS, Lang } from "@/lib/i18n";
import { canonicalUrl, languageAlternates } from "@/lib/seo";
import { t as getT } from "@/lib/translations";
import ContactPageContent from "@/components/ContactPageContent";

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
    title: tr.contactTitle,
    description: tr.contactDescription,
    alternates: {
      canonical: canonicalUrl(lang, "/contact"),
      languages: languageAlternates("/contact"),
    },
  };
}

export default async function LangContactPage({ params }: Props) {
  const { lang: langParam } = await params;
  if (!isValidLang(langParam) || langParam === "en") notFound();
  return <ContactPageContent lang={langParam as Lang} />;
}
