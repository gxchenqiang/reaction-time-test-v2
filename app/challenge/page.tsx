import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChallengeApp from "@/components/challenge/ChallengeApp";
import { t } from "@/lib/translations";
import Link from "next/link";
import { c } from "@/lib/challenge/strings";
import { BASE_URL, SITE_LOGO_URL } from "@/lib/seo";
export const metadata: Metadata = {
  title: c.pageTitle,
  description: c.description,
  alternates: { canonical: `${BASE_URL}/challenge` },
  openGraph: {
    title: c.pageTitle,
    description: c.description,
    url: `${BASE_URL}/challenge`,
    images: [SITE_LOGO_URL],
    type: "website",
  },
};
export default function ChallengePage() {
  return (
    <>
      <Header t={t("en")} lang="en" currentPath="/challenge" />
      <main className="max-w-2xl mx-auto px-4 py-5 sm:py-8">
        <h1 className="text-2xl sm:text-3xl font-black mb-2">{c.title}</h1>
        <p className="text-sm text-gray-500 mb-5">{c.description}</p>
        <ChallengeApp />
        <section className="mt-8 border-t border-gray-200 pt-5 space-y-3 text-sm text-gray-500">
          <h2 className="font-bold text-gray-900">{c.rules}</h2>
          <p>{c.classicDetail}</p>
          <p>{c.advancedDetail}</p>
          <p>{c.latency}</p>
          <p>{c.privacy}</p>
          <p>{c.english}</p>
          <Link href="/" className="underline">
            {c.back}
          </Link>
        </section>
      </main>
      <Footer t={t("en")} lang="en" challenge />
    </>
  );
}
