import Link from "next/link";
import { Lang, getLangPath } from "@/lib/i18n";
import { getPostBySlug } from "@/lib/blogPosts";
import { Translations } from "@/lib/translations";

interface HomeSeoContentProps {
  t: Translations;
  lang: Lang;
}

const SCORE_CATEGORIES = [
  {
    key: "lightning",
    color: "bg-purple-100 text-purple-800 border-purple-200",
    dot: "bg-purple-500",
  },
  {
    key: "fast",
    color: "bg-green-100 text-green-800 border-green-200",
    dot: "bg-green-500",
  },
  {
    key: "average",
    color: "bg-blue-100 text-blue-800 border-blue-200",
    dot: "bg-blue-500",
  },
  {
    key: "slow",
    color: "bg-yellow-100 text-yellow-800 border-yellow-200",
    dot: "bg-yellow-500",
  },
  {
    key: "verySlow",
    color: "bg-red-100 text-red-800 border-red-200",
    dot: "bg-red-400",
  },
] as const;

const RESOURCE_LINK_CLASS = "text-blue-700 underline underline-offset-4 hover:text-blue-900";

function RelatedGuides({ lang, slugs, label }: { lang: Lang; slugs: string[]; label: string }) {
  return (
    <div className="mt-5 text-sm">
      <p className="font-medium text-gray-700 mb-2">{label}</p>
      <ul className="space-y-2">
        {slugs.map((slug) => {
          const post = getPostBySlug(slug, lang);
          if (!post) return null;
          return (
            <li key={slug}>
              <Link href={getLangPath(lang, `/blog/${slug}`)} className={RESOURCE_LINK_CLASS}>
                {post.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function FaqItem({ faq, lang }: { faq: Translations["faqs"][number]; lang: Lang }) {
  const guide = faq.guideSlug ? getPostBySlug(faq.guideSlug, lang) : undefined;
  return (
    <details className="group border border-gray-100 rounded-xl overflow-hidden">
      <summary className="cursor-pointer px-5 py-4 font-semibold text-gray-800 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gray-700">
        {faq.q}
      </summary>
      <div className="px-5 pb-4 text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-3">
        <p>{faq.a}</p>
        {guide && (
          <p className="mt-3">
            <Link href={getLangPath(lang, `/blog/${guide.slug}`)} className={RESOURCE_LINK_CLASS}>
              {guide.title}
            </Link>
          </p>
        )}
      </div>
    </details>
  );
}

export default function HomeSeoContent({ t, lang }: HomeSeoContentProps) {
  const catLabels: Record<string, string> = {
    lightning: t.catLightning,
    fast: t.catFast,
    average: t.catAverage,
    slow: t.catSlow,
    verySlow: t.catVerySlow,
  };
  const catDescs: Record<string, string> = {
    lightning: t.catLightningDesc,
    fast: t.catFastDesc,
    average: t.catAverageDesc,
    slow: t.catSlowDesc,
    verySlow: t.catVerySlowDesc,
  };

  return (
    <div className="space-y-8 mt-8">
      {/* Section 1: How to take the test */}
      <section id="how-to" className="bg-white rounded-2xl shadow-sm p-8 scroll-mt-20">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          {t.howToTitle}
        </h2>
        <ol className="space-y-4">
          {t.howToSteps.map((step, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white text-sm font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <p className="text-gray-600 leading-relaxed pt-1">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Section 2: Score meanings */}
      <section id="scores" className="bg-white rounded-2xl shadow-sm p-8 scroll-mt-20">
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          {t.scoresTitle}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-3">{t.scoresDesc}</p>
        <p className="text-gray-600 leading-relaxed mb-3">{t.scoresExample}</p>
        <p className="mb-6 text-sm text-gray-600">
          {t.sourcesLabel}:{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/25859198/" className={RESOURCE_LINK_CLASS}>Woods et al. (2015)</a>
        </p>
        <div className="space-y-3">
          {SCORE_CATEGORIES.map(({ key, color, dot }) => (
            <div
              key={key}
              className={`flex items-center gap-4 rounded-xl border px-4 py-3 ${color}`}
            >
              <div className={`w-3 h-3 rounded-full flex-shrink-0 ${dot}`} />
              <div className="flex-1 min-w-0">
                <span className="font-semibold">{catLabels[key]}</span>
                <span className="text-sm block mt-1">
                  {catDescs[key]}
                </span>
              </div>
            </div>
          ))}
        </div>
        <RelatedGuides lang={lang} slugs={["what-is-reaction-time", "reaction-time-by-age"]} label={t.relatedGuidesLabel} />
      </section>

      {/* Section 3: Who benefits */}
      <section className="bg-white rounded-2xl shadow-sm p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">{t.whoTitle}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {t.whoItems.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-gray-50 rounded-xl p-4"
            >
              <span className="text-3xl flex-shrink-0">{item.icon}</span>
              <div>
                <p className="font-semibold text-gray-800 mb-1">{item.title}</p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Long-tail use cases */}
      <section className="bg-white rounded-2xl shadow-sm p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          {t.longTailTitle}
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          {t.longTailIntro}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {t.longTailItems.map((item, i) => (
            <div key={i} className="border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-800 mb-1">{item.title}</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Accuracy and benchmarking */}
      <section id="accuracy" className="bg-white rounded-2xl shadow-sm p-8 scroll-mt-20">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          {t.accuracyTitle}
        </h2>
        <ul className="space-y-3">
          {t.accuracyItems.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-gray-900" />
              <p className="text-gray-600 leading-relaxed">{item}</p>
            </li>
          ))}
        </ul>
        <div className="mt-4 text-sm text-gray-600">
          <p className="mb-2">{t.sourcesLabel}</p>
          <ul className="space-y-2">
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Performance/now" className={RESOURCE_LINK_CLASS}>MDN: performance.now()</a></li>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame" className={RESOURCE_LINK_CLASS}>MDN: requestAnimationFrame()</a></li>
          </ul>
          <p className="mt-3"><Link href={getLangPath(lang, "/about")} className={RESOURCE_LINK_CLASS}>{t.aboutTitle}</Link></p>
        </div>
      </section>

      {/* Section 6: Tips */}
      <section id="practice" className="bg-white rounded-2xl shadow-sm p-8 scroll-mt-20">
        <h2 className="text-xl font-bold text-gray-900 mb-6">{t.tipsTitle}</h2>
        <ul className="space-y-3">
          {t.tips.map((tip, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-700 text-xs font-bold flex items-center justify-center mt-0.5">
                ✓
              </span>
              <p className="text-gray-600 leading-relaxed">{tip}</p>
            </li>
          ))}
        </ul>
        <RelatedGuides lang={lang} slugs={["how-to-improve-reaction-time"]} label={t.relatedGuidesLabel} />
      </section>

      {/* Section 7: FAQ */}
      <section id="faq" className="bg-white rounded-2xl shadow-sm p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">{t.faqTitle}</h2>
        <div className="space-y-2">
          {t.faqs.map((faq, i) => (
            <FaqItem key={i} faq={faq} lang={lang} />
          ))}
        </div>
      </section>
    </div>
  );
}
