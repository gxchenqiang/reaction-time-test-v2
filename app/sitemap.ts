import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blogPosts";
import { SUPPORTED_LANGS, Lang } from "@/lib/i18n";
import { canonicalUrl, languageAlternates } from "@/lib/seo";

export const dynamic = "force-static";

const SITE_LAST_MODIFIED = new Date("2026-05-03T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedPages = ["", "/blog", "/about", "/contact"];

  const urls: MetadataRoute.Sitemap = [];

  for (const page of localizedPages) {
    for (const lang of SUPPORTED_LANGS) {
      urls.push({
        url: canonicalUrl(lang as Lang, page),
        lastModified: SITE_LAST_MODIFIED,
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1.0 : 0.7,
        alternates: {
          languages: languageAlternates(page),
        },
      });
    }
  }

  for (const post of BLOG_POSTS) {
    for (const lang of SUPPORTED_LANGS) {
      const path = `/blog/${post.slug}`;
      urls.push({
        url: canonicalUrl(lang as Lang, path),
        lastModified: new Date(`${post.date}T00:00:00.000Z`),
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: {
          languages: languageAlternates(path),
        },
      });
    }
  }

  return urls;
}
