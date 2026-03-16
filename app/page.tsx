
import type { Metadata } from "next";
import { t as getT } from "@/lib/translations";
import { LANG_HREFLANG, SUPPORTED_LANGS, getLangPath } from "@/lib/i18n";
import HomePageContent from "@/components/HomePageContent";

export async function generateMetadata(): Promise<Metadata> {
  const tr = getT("en");
  return {
    title: tr.siteTitle,
    description: tr.siteDescription,
    alternates: {
      canonical: "https://reactiontimetestonline.com/",
      languages: Object.fromEntries(
        SUPPORTED_LANGS.map((l) => [
          LANG_HREFLANG[l],
          `https://reactiontimetestonline.com${getLangPath(l, "")}`,
        ])
      ),
    },
    openGraph: {
      title: tr.siteTitle,
      description: tr.siteDescription,
      url: "https://reactiontimetestonline.com/",
      locale: "en_US",
    },
  };
}

export default function HomePage() {
  return <HomePageContent lang="en" />;
}
