import { Lang, LANG_HREFLANG, getLangPath, SUPPORTED_LANGS } from "@/lib/i18n";
import { t as getT } from "@/lib/translations";
import Header from "./Header";
import Footer from "./Footer";
import ReactionTest from "./ReactionTest";
import FunFacts from "./FunFacts";
import AdBanner from "./AdBanner";
import HomeSeoContent from "./HomeSeoContent";

interface HomePageContentProps {
  lang: Lang;
}

export default function HomePageContent({ lang }: HomePageContentProps) {
  const tr = getT(lang);

  return (
    <>
      <Header t={tr} lang={lang} currentPath="" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* hreflang links rendered as hidden elements for SEO */}
        <div className="hidden" aria-hidden="true">
          {SUPPORTED_LANGS.map((l) => (
            <link
              key={l}
              rel="alternate"
              hrefLang={LANG_HREFLANG[l]}
              href={`https://reactiontimetestonline.com${getLangPath(l, "")}`}
            />
          ))}
          <link
            rel="alternate"
            hrefLang="x-default"
            href="https://reactiontimetestonline.com/"
          />
        </div>

        {/* Top ad banner */}
        <AdBanner slot="top" className="mb-8" />

        <div className="flex gap-8">
          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Hero title */}
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
                {tr.siteTitle}
              </h1>
              <p className="text-gray-500 max-w-xl mx-auto text-base">
                {tr.siteDescription}
              </p>
            </div>

            {/* Test component */}
            <ReactionTest t={tr} lang={lang} />

            {/* Fun facts */}
            <div className="mt-8">
              <FunFacts t={tr} />
            </div>

            {/* Bottom ad */}
            <AdBanner slot="bottom" className="mt-8" />

            {/* About the test - SEO content */}
            <section className="mt-12 bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {tr.aboutTestTitle}
              </h2>
              <p className="text-gray-600 leading-relaxed">{tr.aboutTestDesc}</p>
            </section>

            {/* Extended SEO content sections */}
            <HomeSeoContent t={tr} />
          </div>

          {/* Sidebar ad - desktop only */}
          <aside className="hidden lg:block w-44 flex-shrink-0">
            <div className="sticky top-24">
              <AdBanner slot="sidebar" />
            </div>
          </aside>
        </div>
      </main>

      <Footer t={tr} lang={lang} />
    </>
  );
}
