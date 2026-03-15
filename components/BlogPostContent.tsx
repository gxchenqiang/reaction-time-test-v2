import Link from "next/link";
import { Lang, getLangPath } from "@/lib/i18n";
import { t as getT } from "@/lib/translations";
import { BlogPost, BlogSection } from "@/lib/blogPosts";
import Header from "./Header";
import Footer from "./Footer";
import AdBanner from "./AdBanner";

interface BlogPostContentProps {
  post: BlogPost;
  lang: Lang;
}

function renderSection(section: BlogSection, i: number) {
  switch (section.type) {
    case "h2":
      return (
        <h2
          key={i}
          className="text-xl font-bold text-gray-900 mt-10 mb-3 leading-snug"
        >
          {section.content}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="text-lg font-semibold text-gray-800 mt-6 mb-2">
          {section.content}
        </h3>
      );
    case "paragraph":
      return (
        <p key={i} className="text-gray-600 leading-relaxed mb-4">
          {section.content}
        </p>
      );
    case "list":
      return (
        <ul key={i} className="space-y-2 mb-4 pl-1">
          {section.items?.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-gray-600">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );
    case "ordered-list":
      return (
        <ol key={i} className="space-y-2 mb-4 pl-1">
          {section.items?.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-gray-600">
              <span className="flex-shrink-0 font-semibold text-gray-400 text-sm w-5 text-right mt-0.5">
                {j + 1}.
              </span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ol>
      );
    case "highlight":
      return (
        <div
          key={i}
          className="my-8 bg-gray-900 rounded-2xl px-6 py-5 text-white"
        >
          <p className="font-medium leading-relaxed">{section.content}</p>
        </div>
      );
    default:
      return null;
  }
}

export default function BlogPostContent({ post, lang }: BlogPostContentProps) {
  const tr = getT(lang);
  const blogPath = getLangPath(lang, "/blog");

  return (
    <>
      <Header t={tr} lang={lang} currentPath="/blog" />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <AdBanner slot="top" className="mb-8" />

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link
            href={getLangPath(lang, "")}
            className="hover:text-gray-700 transition-colors"
          >
            {tr.navHome}
          </Link>
          <span>/</span>
          <Link
            href={blogPath}
            className="hover:text-gray-700 transition-colors"
          >
            {tr.navBlog}
          </Link>
          <span>/</span>
          <span className="text-gray-600 truncate">{post.title}</span>
        </nav>

        {/* Article */}
        <article className="bg-white rounded-2xl shadow-sm p-8 sm:p-10">
          {/* Meta */}
          <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
            <time dateTime={post.date}>{post.date}</time>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Excerpt / lead */}
          <p className="text-gray-500 text-base leading-relaxed border-l-4 border-gray-200 pl-4 mb-8 italic">
            {post.excerpt}
          </p>

          {/* Body */}
          <div>{post.sections.map((section, i) => renderSection(section, i))}</div>
        </article>

        {/* Back link */}
        <div className="mt-6">
          <Link
            href={blogPath}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
          >
            ← {tr.navBlog}
          </Link>
        </div>

        <AdBanner slot="bottom" className="mt-8" />
      </main>

      <Footer t={tr} lang={lang} />
    </>
  );
}
