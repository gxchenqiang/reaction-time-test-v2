import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBlogSlugs, getPostBySlug } from "@/lib/blogPosts";
import { isValidLang, LANG_HREFLANG, Lang, SUPPORTED_LANGS } from "@/lib/i18n";
import { canonicalUrl, languageAlternates } from "@/lib/seo";
import BlogPostContent from "@/components/BlogPostContent";

interface Props {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  return SUPPORTED_LANGS.filter((lang) => lang !== "en").flatMap((lang) =>
    getBlogSlugs().map((slug) => ({
      lang,
      slug,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam, slug } = await params;
  if (!isValidLang(langParam) || langParam === "en") return {};

  const lang = langParam as Lang;
  const post = getPostBySlug(slug, lang);
  if (!post) return {};

  return {
    title: `${post.title} – Reaction Time Test`,
    description: post.excerpt,
    alternates: {
      canonical: canonicalUrl(lang, `/blog/${slug}`),
      languages: languageAlternates(`/blog/${slug}`),
    },
    openGraph: {
      type: "article",
      title: `${post.title} – Reaction Time Test`,
      description: post.excerpt,
      url: canonicalUrl(lang, `/blog/${slug}`),
      locale: LANG_HREFLANG[lang].replace("-", "_"),
      publishedTime: post.date,
    },
  };
}

export default async function LocalizedBlogPostPage({ params }: Props) {
  const { lang: langParam, slug } = await params;
  if (!isValidLang(langParam) || langParam === "en") notFound();

  const lang = langParam as Lang;
  const post = getPostBySlug(slug, lang);
  if (!post) notFound();

  return <BlogPostContent post={post} lang={lang} />;
}
