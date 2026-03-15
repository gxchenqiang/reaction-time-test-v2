import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  isValidLang,
  SUPPORTED_LANGS,
  Lang,
  getLangPath,
  LANG_HREFLANG,
} from "@/lib/i18n";
import { t as getT } from "@/lib/translations";
import { BLOG_POSTS, getPostBySlug } from "@/lib/blogPosts";
import BlogPostContent from "@/components/BlogPostContent";

interface Props {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  return SUPPORTED_LANGS.filter((l) => l !== "en").flatMap((lang) =>
    BLOG_POSTS.map((post) => ({ lang, slug: post.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam, slug } = await params;
  if (!isValidLang(langParam) || langParam === "en") return {};
  const lang = langParam as Lang;
  const tr = getT(lang);
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} – ${tr.siteTitle}`,
    description: post.excerpt,
    alternates: {
      canonical: `https://reactiontimetestonline.com${getLangPath(lang, `/blog/${slug}`)}`,
      languages: Object.fromEntries(
        SUPPORTED_LANGS.map((l) => [
          LANG_HREFLANG[l],
          `https://reactiontimetestonline.com${getLangPath(l, `/blog/${slug}`)}`,
        ])
      ),
    },
  };
}

export default async function LangBlogPostPage({ params }: Props) {
  const { lang: langParam, slug } = await params;
  if (!isValidLang(langParam) || langParam === "en") notFound();
  const post = getPostBySlug(slug);
  if (!post) notFound();
  return <BlogPostContent post={post} lang={langParam as Lang} />;
}
