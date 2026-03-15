"use client";

import { useState } from "react";
import { Lang } from "@/lib/i18n";
import { t as getT } from "@/lib/translations";
import Header from "./Header";
import Footer from "./Footer";

interface ContactPageContentProps {
  lang: Lang;
}

export default function ContactPageContent({ lang }: ContactPageContentProps) {
  const tr = getT(lang);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, integrate with a form service (e.g. Formspree, EmailJS)
    setSubmitted(true);
  };

  return (
    <>
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
          <h2 className="font-bold text-gray-800 mb-2">Other ways to reach us</h2>
          <p className="text-sm text-gray-600">
            Email:{" "}
            <a
              href="mailto:hello@reactiontimetestonline.com"
              className="text-blue-600 hover:underline"
            >
              hello@reactiontimetestonline.com
            </a>
          </p>
        </div>
      </main>

      <Footer t={tr} lang={lang} />
    </>
  );
}
