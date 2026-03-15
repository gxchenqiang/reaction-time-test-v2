import Link from "next/link";
import { Lang, getLangPath } from "@/lib/i18n";
import { t as getT } from "@/lib/translations";
import { BLOG_POSTS } from "@/lib/blogPosts";
import Header from "./Header";
import Footer from "./Footer";
import AdBanner from "./AdBanner";

interface BlogPageContentProps {
  lang: Lang;
}

export default function BlogPageContent({ lang }: BlogPageContentProps) {
  const tr = getT(lang);

  return (
    <>
      <Header t={tr} lang={lang} currentPath="/blog" />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <AdBanner slot="top" className="mb-8" />

        <div className="mb-10">
          <h1 className="text-3xl font-black text-gray-900 mb-3">{tr.blogTitle}</h1>
          <p className="text-gray-500">{tr.blogDescription}</p>
        </div>

        <div className="grid gap-6">
          {BLOG_POSTS.map((post) => {
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
                      Read more →
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
