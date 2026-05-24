import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const localizedLangs = ["zh", "ko", "ja", "de", "fr"];
const slugs = [
  "what-is-reaction-time",
  "how-to-improve-reaction-time",
  "reaction-time-by-age",
  "gamers-vs-athletes-reaction-time",
  "caffeine-and-reaction-time",
  "sleep-deprivation-reaction-time",
];

const requiredFiles = [
  "app/[lang]/blog/page.tsx",
  "app/[lang]/blog/[slug]/page.tsx",
];

for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(root, file))) {
    throw new Error(`Missing localized blog route: ${file}`);
  }
}

const translationsSource = fs.readFileSync(
  path.join(root, "lib/blogPostTranslations.ts"),
  "utf8"
);

if (!translationsSource.includes("BLOG_POST_TRANSLATIONS")) {
  throw new Error("Missing BLOG_POST_TRANSLATIONS in lib/blogPostTranslations.ts");
}

for (const lang of localizedLangs) {
  const start = translationsSource.indexOf(`  ${lang}: {`);
  if (start === -1) {
    throw new Error(`Missing blog translations for locale: ${lang}`);
  }

  const nextStarts = localizedLangs
    .filter((nextLang) => nextLang !== lang)
    .map((nextLang) => translationsSource.indexOf(`  ${nextLang}: {`, start + 1))
    .filter((index) => index > start);
  const end = Math.min(
    ...nextStarts,
    translationsSource.indexOf("\n};", start + 1)
  );
  const langBlock = translationsSource.slice(start, end);

  for (const slug of slugs) {
    if (!langBlock.includes(`"${slug}":`)) {
      throw new Error(`Missing ${lang} translation for ${slug}`);
    }
  }
}

const headerSource = fs.readFileSync(
  path.join(root, "components/Header.tsx"),
  "utf8"
);
const footerSource = fs.readFileSync(
  path.join(root, "components/Footer.tsx"),
  "utf8"
);

if (headerSource.includes('getLangPath("en", "/blog")')) {
  throw new Error("Header blog link still forces English blog");
}

if (footerSource.includes('getLangPath("en", "/blog")')) {
  throw new Error("Footer blog link still forces English blog");
}

console.log("Localized blog routes and translations are present.");
