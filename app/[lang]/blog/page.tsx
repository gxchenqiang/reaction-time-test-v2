import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isValidLang, LANG_HREFLANG, Lang, SUPPORTED_LANGS } from "@/lib/i18n";
import { canonicalUrl, languageAlternates } from "@/lib/seo";
import { t as getT } from "@/lib/translations";
import BlogPageContent from "@/components/BlogPageContent";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return SUPPORTED_LANGS.filter((lang) => lang !== "en").map((lang) => ({
    lang,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  if (!isValidLang(langParam) || langParam === "en") return {};

  const lang = langParam as Lang;
  const tr = getT(lang);

  return {
    title: tr.blogTitle,
    description: tr.blogDescription,
    alternates: {
      canonical: canonicalUrl(lang, "/blog"),
      languages: languageAlternates("/blog"),
    },
    openGraph: {
      title: tr.blogTitle,
      description: tr.blogDescription,
      url: canonicalUrl(lang, "/blog"),
      locale: LANG_HREFLANG[lang].replace("-", "_"),
    },
  };
}

export default async function LocalizedBlogPage({ params }: Props) {
  const { lang: langParam } = await params;
  if (!isValidLang(langParam) || langParam === "en") notFound();
  return <BlogPageContent lang={langParam as Lang} />;
}
