import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const translationsPath = path.join(__dirname, "../lib/translations.ts");
const source = fs.readFileSync(translationsPath, "utf8");

const locales = ["en", "zh", "ko", "ja", "de", "fr"];
const requiredFields = [
  "longTailTitle",
  "longTailIntro",
  "longTailItems",
  "accuracyTitle",
  "accuracyItems",
];

const localeIndexes = locales.map((locale) => ({
  locale,
  index: source.indexOf(`const ${locale}: Translations = {`),
}));

for (const { locale, index } of localeIndexes) {
  if (index === -1) {
    throw new Error(`Missing translation object for locale: ${locale}`);
  }
}

for (let i = 0; i < localeIndexes.length; i += 1) {
  const { locale, index } = localeIndexes[i];
  const nextIndex = localeIndexes[i + 1]?.index ?? source.indexOf(
    "export const translations",
    index
  );
  const block = source.slice(index, nextIndex);

  for (const field of requiredFields) {
    if (!block.includes(`${field}:`)) {
      throw new Error(`Locale ${locale} is missing ${field}`);
    }
  }
}

console.log("SEO content fields are present for all locales.");
