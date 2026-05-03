
import type { Metadata } from "next";
import { t as getT } from "@/lib/translations";
import { canonicalUrl, languageAlternates } from "@/lib/seo";
import HomePageContent from "@/components/HomePageContent";

export async function generateMetadata(): Promise<Metadata> {
  const tr = getT("en");
  return {
    title: tr.siteTitle,
    description: tr.siteDescription,
    alternates: {
      canonical: canonicalUrl("en"),
      languages: languageAlternates(),
    },
    openGraph: {
      title: tr.siteTitle,
      description: tr.siteDescription,
      url: canonicalUrl("en"),
      locale: "en_US",
    },
  };
}

export default function HomePage() {
  return <HomePageContent lang="en" />;
}
