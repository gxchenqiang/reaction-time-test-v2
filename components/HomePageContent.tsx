import { Lang } from "@/lib/i18n";
import { t as getT } from "@/lib/translations";
import { ADS_ENABLED } from "@/lib/config";
import {
  BASE_URL,
  canonicalUrl,
  inLanguage,
  organizationJsonLd,
} from "@/lib/seo";
import Header from "./Header";
import Footer from "./Footer";
import ReactionTest from "./ReactionTest";
import FunFacts from "./FunFacts";
import AdBanner from "./AdBanner";
import HomeSeoContent from "./HomeSeoContent";
import JsonLd from "./JsonLd";

interface HomePageContentProps {
  lang: Lang;
}

export default function HomePageContent({ lang }: HomePageContentProps) {
  const tr = getT(lang);
  const pageUrl = canonicalUrl(lang);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      organizationJsonLd(),
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        name: "Reaction Time Test Online",
        url: BASE_URL,
        inLanguage: inLanguage(lang),
      },
      {
        "@type": "WebApplication",
        "@id": `${pageUrl}#reaction-time-test`,
        name: tr.siteTitle,
        description: tr.siteDescription,
        url: pageUrl,
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any",
        isAccessibleForFree: true,
        inLanguage: inLanguage(lang),
        publisher: {
          "@id": `${BASE_URL}/#organization`,
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        inLanguage: inLanguage(lang),
        mainEntity: tr.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Header t={tr} lang={lang} currentPath="" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Top ad banner */}
        <AdBanner slot="top" className="mb-8" />

        <div className={ADS_ENABLED ? "flex gap-8" : ""}>
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

          {/* Sidebar ad - desktop only, only rendered when ads are enabled */}
          {ADS_ENABLED && (
            <aside className="hidden lg:block w-44 flex-shrink-0">
              <div className="sticky top-24">
                <AdBanner slot="sidebar" />
              </div>
            </aside>
          )}
        </div>
      </main>

      <Footer t={tr} lang={lang} />
    </>
  );
}
