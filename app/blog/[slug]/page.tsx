import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBlogSlugs, getPostBySlug } from "@/lib/blogPosts";
import { canonicalUrl, languageAlternates } from "@/lib/seo";
import BlogPostContent from "@/components/BlogPostContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} – Reaction Time Test`,
    description: post.excerpt,
    alternates: {
      canonical: canonicalUrl("en", `/blog/${slug}`),
      languages: languageAlternates(`/blog/${slug}`),
    },
    openGraph: {
      type: "article",
      title: `${post.title} – Reaction Time Test`,
      description: post.excerpt,
      url: canonicalUrl("en", `/blog/${slug}`),
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  return <BlogPostContent post={post} lang="en" />;
}
