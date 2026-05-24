import Link from "next/link";
import { Lang, getLangPath } from "@/lib/i18n";
import {
  BASE_URL,
  canonicalUrl,
  inLanguage,
  organizationJsonLd,
} from "@/lib/seo";
import { t as getT } from "@/lib/translations";
import { getBlogPosts } from "@/lib/blogPosts";
import Header from "./Header";
import Footer from "./Footer";
import AdBanner from "./AdBanner";
import JsonLd from "./JsonLd";

interface BlogPageContentProps {
  lang: Lang;
}

const BLOG_UI_COPY: Record<Lang, { readMore: string }> = {
  en: { readMore: "Read more" },
  zh: { readMore: "阅读全文" },
  ko: { readMore: "더 읽기" },
  ja: { readMore: "続きを読む" },
  de: { readMore: "Weiterlesen" },
  fr: { readMore: "Lire la suite" },
};

export default function BlogPageContent({ lang }: BlogPageContentProps) {
  const tr = getT(lang);
  const copy = BLOG_UI_COPY[lang];
  const posts = getBlogPosts(lang);
  const pageUrl = canonicalUrl(lang, "/blog");
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      organizationJsonLd(),
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#collection`,
        name: tr.blogTitle,
        description: tr.blogDescription,
        url: pageUrl,
        inLanguage: inLanguage(lang),
        isPartOf: {
          "@id": `${BASE_URL}/#website`,
        },
        hasPart: posts.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          url: canonicalUrl(lang, `/blog/${post.slug}`),
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: tr.navHome,
            item: canonicalUrl(lang),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: tr.navBlog,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Header t={tr} lang={lang} currentPath="/blog" />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <AdBanner slot="top" className="mb-8" />

        <div className="mb-10">
          <h1 className="text-3xl font-black text-gray-900 mb-3">{tr.blogTitle}</h1>
          <p className="text-gray-500">{tr.blogDescription}</p>
        </div>

        <div className="grid gap-6">
          {posts.map((post) => {
            const href = getLangPath(lang, `/blog/${post.slug}`);
            return (
              <article key={post.slug}>
                <Link
                  href={href}
                  className="block bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow group"
                >
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <time dateTime={post.date}>{post.date}</time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-gray-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-4">
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 group-hover:gap-2 transition-all">
                      {copy.readMore} →
                    </span>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>

        <AdBanner slot="bottom" className="mt-8" />
      </main>

      <Footer t={tr} lang={lang} />
    </>
  );
}
