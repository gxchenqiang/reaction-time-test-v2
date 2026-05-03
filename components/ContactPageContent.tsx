"use client";

import { useState } from "react";
import { Lang } from "@/lib/i18n";
import {
  BASE_URL,
  canonicalUrl,
  inLanguage,
  organizationJsonLd,
} from "@/lib/seo";
import { t as getT } from "@/lib/translations";
import Header from "./Header";
import Footer from "./Footer";
import JsonLd from "./JsonLd";

interface ContactPageContentProps {
  lang: Lang;
}

const CONTACT_EMAIL = "support@reactiontimetestonline.com";

const CONTACT_COPY: Record<
  Lang,
  {
    otherWaysTitle: string;
    emailLabel: string;
  }
> = {
  en: {
    otherWaysTitle: "Other ways to reach us",
    emailLabel: "Email",
  },
  zh: {
    otherWaysTitle: "其他联系方式",
    emailLabel: "邮箱",
  },
  ko: {
    otherWaysTitle: "다른 연락 방법",
    emailLabel: "이메일",
  },
  ja: {
    otherWaysTitle: "その他の連絡方法",
    emailLabel: "メール",
  },
  de: {
    otherWaysTitle: "Weitere Kontaktmöglichkeiten",
    emailLabel: "E-Mail",
  },
  fr: {
    otherWaysTitle: "Autres moyens de nous contacter",
    emailLabel: "E-mail",
  },
};

export default function ContactPageContent({ lang }: ContactPageContentProps) {
  const tr = getT(lang);
  const copy = CONTACT_COPY[lang];
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const pageUrl = canonicalUrl(lang, "/contact");
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      organizationJsonLd(),
      {
        "@type": "ContactPage",
        "@id": `${pageUrl}#contact`,
        name: tr.contactTitle,
        description: tr.contactDescription,
        url: pageUrl,
        inLanguage: inLanguage(lang),
        isPartOf: {
          "@id": `${BASE_URL}/#website`,
        },
        about: {
          "@id": `${BASE_URL}/#organization`,
        },
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
            name: tr.navContact,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, integrate with a form service (e.g. Formspree, EmailJS)
    setSubmitted(true);
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Header t={tr} lang={lang} currentPath="/contact" />

      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-black text-gray-900 mb-3">{tr.contactTitle}</h1>
        <p className="text-gray-500 mb-8">{tr.contactDescription}</p>

        <div className="bg-white rounded-2xl shadow-sm p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✅</div>
              <p className="text-lg font-semibold text-gray-800">
                {tr.contactSent}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {tr.contactName}
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
                  placeholder={tr.contactName}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {tr.contactEmail}
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {tr.contactMessage}
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 transition resize-none"
                  placeholder={tr.contactMessage + "..."}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-700 transition-colors"
              >
                {tr.contactSend}
              </button>
            </form>
          )}
        </div>

        <div className="mt-8 bg-blue-50 rounded-2xl p-6">
          <h2 className="font-bold text-gray-800 mb-2">
            {copy.otherWaysTitle}
          </h2>
          <p className="text-sm text-gray-600">
            {copy.emailLabel}:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-blue-600 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </main>

      <Footer t={tr} lang={lang} />
    </>
  );
}
