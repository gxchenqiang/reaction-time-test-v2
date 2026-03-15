"use client";

import { useState } from "react";
import { Translations } from "@/lib/translations";

interface HomeSeoContentProps {
  t: Translations;
}

const SCORE_CATEGORIES = [
  {
    key: "lightning",
    range: "< 150ms",
    color: "bg-purple-100 text-purple-800 border-purple-200",
    dot: "bg-purple-500",
  },
  {
    key: "fast",
    range: "150–200ms",
    color: "bg-green-100 text-green-800 border-green-200",
    dot: "bg-green-500",
  },
  {
    key: "average",
    range: "200–300ms",
    color: "bg-blue-100 text-blue-800 border-blue-200",
    dot: "bg-blue-500",
  },
  {
    key: "slow",
    range: "300–400ms",
    color: "bg-yellow-100 text-yellow-800 border-yellow-200",
    dot: "bg-yellow-500",
  },
  {
    key: "verySlow",
    range: "> 400ms",
    color: "bg-red-100 text-red-800 border-red-200",
    dot: "bg-red-400",
  },
] as const;

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-800 pr-4">{q}</span>
        <span className="text-gray-400 flex-shrink-0 text-lg leading-none">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div className="px-5 pb-4 text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-3">
          {a}
        </div>
      )}
    </div>
  );
}

export default function HomeSeoContent({ t }: HomeSeoContentProps) {
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
      <section className="bg-white rounded-2xl shadow-sm p-8">
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
      <section className="bg-white rounded-2xl shadow-sm p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          {t.scoresTitle}
        </h2>
        <p className="text-gray-500 text-sm mb-6">{t.scoresDesc}</p>
        <div className="space-y-3">
          {SCORE_CATEGORIES.map(({ key, range, color, dot }) => (
            <div
              key={key}
              className={`flex items-center gap-4 rounded-xl border px-4 py-3 ${color}`}
            >
              <div className={`w-3 h-3 rounded-full flex-shrink-0 ${dot}`} />
              <div className="flex-1 min-w-0">
                <span className="font-semibold">{catLabels[key]}</span>
                <span className="text-xs ml-2 opacity-70">
                  {catDescs[key]}
                </span>
              </div>
              <span className="text-xs font-mono font-semibold flex-shrink-0 opacity-80">
                {range}
              </span>
            </div>
          ))}
        </div>
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

      {/* Section 4: Tips */}
      <section className="bg-white rounded-2xl shadow-sm p-8">
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
      </section>

      {/* Section 5: FAQ */}
      <section className="bg-white rounded-2xl shadow-sm p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">{t.faqTitle}</h2>
        <div className="space-y-2">
          {t.faqs.map((faq, i) => (
            <FaqItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>
    </div>
  );
}
