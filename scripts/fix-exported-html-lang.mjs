import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

const outDir = join(process.cwd(), "out");

const langBySegment = new Map([
  ["zh", "zh-CN"],
  ["ko", "ko"],
  ["ja", "ja"],
  ["de", "de"],
  ["fr", "fr"],
]);

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const filePath = join(dir, name);
    const stat = statSync(filePath);
    if (stat.isDirectory()) return htmlFiles(filePath);
    return name.endsWith(".html") ? [filePath] : [];
  });
}

function htmlLangFor(filePath) {
  const parts = relative(outDir, filePath).split(sep);
  const firstSegment = parts[0].replace(/\.html$/, "");
  return langBySegment.get(firstSegment) || "en";
}

for (const filePath of htmlFiles(outDir)) {
  const html = readFileSync(filePath, "utf8");
  const lang = htmlLangFor(filePath);
  const nextHtml = html.replace(/<html\b([^>]*)>/, (_match, attrs) => {
    const nextAttrs = attrs.includes("lang=")
      ? attrs.replace(/\s+lang="[^"]*"/, "")
      : attrs;
    return `<html lang="${lang}"${nextAttrs}>`;
  });
  if (nextHtml !== html) writeFileSync(filePath, nextHtml);
}
