export const runtime = 'edge';

import { MetadataRoute } from "next";
import { SUPPORTED_LANGS, getLangPath, Lang } from "@/lib/i18n";

const BASE_URL = "https://reactiontimetestonline.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/blog", "/about", "/contact"];

  const urls: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    for (const lang of SUPPORTED_LANGS) {
      const path = getLangPath(lang as Lang, page);
      urls.push({
        url: `${BASE_URL}${path}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1.0 : 0.7,
      });
    }
  }

  return urls;
}
