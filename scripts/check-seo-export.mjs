import fs from "node:fs";
import path from "node:path";

// Validate the files Cloudflare actually serves, including its redirect rules.
// Run after `npm run build`, which also fixes each exported document's lang.
const outDir = path.resolve(process.argv[2] || "out");
const errors = new Set();
const pages = new Map();
const expectedLang = { zh: "zh-CN", ko: "ko", ja: "ja", de: "de", fr: "fr", vi: "vi" };
const fail = (message) => errors.add(message);

function normalizedUrl(value) {
  try { return new URL(value).href; } catch { return value; }
}

function sameUrl(a, b) {
  return Boolean(a && b) && normalizedUrl(a) === normalizedUrl(b);
}

function decode(value = "") {
  const entities = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };
  return value.replace(/&(#x[\da-f]+|#\d+|amp|lt|gt|quot|apos|nbsp);/gi, (_, entity) => {
    if (entity[0] !== "#") return entities[entity.toLowerCase()];
    const hex = entity[1].toLowerCase() === "x";
    const codePoint = Number.parseInt(entity.slice(hex ? 2 : 1), hex ? 16 : 10);
    return codePoint <= 0x10ffff ? String.fromCodePoint(codePoint) : "\uFFFD";
  });
}

function attributes(source) {
  return Object.fromEntries(
    [...source.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)].map(
      ([, name, double, single]) => [name.toLowerCase(), decode(double ?? single)]
    )
  );
}

function tags(source, name) {
  return [...source.matchAll(new RegExp(`<${name}\\b([^>]*)>`, "gi"))].map(
    ([, attrs]) => attributes(attrs)
  );
}

function visibleText(source) {
  return decode(
    source
      .replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, " ")
      .replace(/<!--[^]*?-->/g, " ")
      .replace(/<[^>]+>/g, " ")
  ).replace(/\s+/g, " ").trim();
}

function exportedFile(url) {
  let pathname;
  try {
    pathname = decodeURIComponent(url.pathname);
  } catch {
    return undefined;
  }
  const relative = pathname.replace(/^\/+/, "");
  const candidates = pathname === "/"
    ? ["index.html"]
    : [relative, `${relative}.html`, path.join(relative, "index.html")];
  return candidates.map((file) => path.resolve(outDir, file)).find((file) =>
    file.startsWith(`${outDir}${path.sep}`) && fs.existsSync(file) && fs.statSync(file).isFile()
  );
}

const sitemapPath = path.join(outDir, "sitemap.xml");
if (!fs.existsSync(sitemapPath)) {
  throw new Error(`Missing ${sitemapPath}. Run npm run build first.`);
}
const sitemap = fs.readFileSync(sitemapPath, "utf8");
const entries = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(([, block]) => ({
  loc: decode(block.match(/<loc>([\s\S]*?)<\/loc>/)?.[1]),
  alternates: tags(block, "xhtml:link"),
}));
if (!entries.length || !entries[0].loc) throw new Error("Sitemap has no URLs.");
const origin = new URL(entries[0].loc).origin;
const sitemapUrls = new Set(entries.map(({ loc }) => normalizedUrl(loc)));
if (sitemapUrls.size !== entries.length) fail("Sitemap contains duplicate URLs.");

const redirectsPath = path.join(outDir, "_redirects");
const redirects = fs.existsSync(redirectsPath)
  ? fs.readFileSync(redirectsPath, "utf8").split(/\r?\n/)
      .map((line) => line.trim()).filter((line) => line && !line.startsWith("#"))
      .map((line) => {
        const [source, destination, rawStatus = "302"] = line.split(/\s+/);
        const pattern = source.replace(/[.+?^${}()|[\]\\]/g, "\\$&")
          .replace(/:[\w]+/g, "[^/]+")
          .replace(/\*/g, ".*");
        return { source, destination, status: Number.parseInt(rawStatus, 10), pattern: new RegExp(`^${pattern}$`) };
      })
  : [];

function checkTarget(value, from, label) {
  let url;
  try {
    url = new URL(value, from);
  } catch {
    fail(`${from}: invalid ${label} URL ${value}`);
    return undefined;
  }
  if (url.origin !== origin) {
    if (label !== "internal link") fail(`${from}: ${label} points outside the site: ${value}`);
    return undefined;
  }
  const redirect = redirects.find((rule) => rule.status >= 300 && rule.status < 400 &&
    (rule.pattern.test(url.pathname) || rule.pattern.test(`${url.origin}${url.pathname}`)));
  if (redirect) fail(`${from}: ${label} ${url.pathname} is redirected by ${redirect.source} -> ${redirect.destination}`);
  const file = exportedFile(url);
  if (!file) fail(`${from}: ${label} has no exported file: ${url.pathname}`);
  return file ? { url, file } : undefined;
}

function readPage(file) {
  if (!pages.has(file)) {
    const html = fs.readFileSync(file, "utf8");
    const withoutScripts = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
    const links = tags(withoutScripts, "link");
    pages.set(file, {
      html,
      withoutScripts,
      lang: tags(withoutScripts, "html")[0]?.lang,
      canonical: links.filter((link) => link.rel === "canonical"),
      alternates: links.filter((link) => link.rel === "alternate" && link.hreflang),
      anchors: tags(withoutScripts, "a"),
      ids: new Set([...withoutScripts.matchAll(/\bid="([^"]*)"/g)].map(([, id]) => decode(id))),
    });
  }
  return pages.get(file);
}

for (const entry of entries) {
  const target = checkTarget(entry.loc, origin, "sitemap URL");
  if (!target) continue;
  const { url, file } = target;
  const page = readPage(file);
  const lang = expectedLang[url.pathname.split("/")[1]] || "en";
  if (page.lang !== lang) fail(`${entry.loc}: html lang is ${page.lang}, expected ${lang}`);
  if (page.canonical.length !== 1 || !sameUrl(page.canonical[0]?.href, entry.loc)) {
    fail(`${entry.loc}: expected exactly one self-referencing canonical`);
  }
  if (!/<title>[^<]+<\/title>/i.test(page.withoutScripts)) fail(`${entry.loc}: missing title`);
  const metas = tags(page.withoutScripts, "meta");
  if (!metas.some((meta) => meta.name === "description" && meta.content?.trim())) fail(`${entry.loc}: missing description`);
  if (metas.some((meta) => /^(robots|googlebot)$/i.test(meta.name || "") && /noindex/i.test(meta.content || ""))) {
    fail(`${entry.loc}: sitemap includes a noindex page`);
  }
  if (tags(page.withoutScripts, "h1").length !== 1) fail(`${entry.loc}: expected exactly one h1`);

  const alternates = new Map(page.alternates.map((link) => [link.hreflang, normalizedUrl(link.href)]));
  if (alternates.size !== page.alternates.length) fail(`${entry.loc}: duplicate hreflang entries`);
  if (alternates.size && !sameUrl(alternates.get(lang), entry.loc)) fail(`${entry.loc}: hreflang is missing its own language URL`);
  for (const alternate of page.alternates) {
    const other = checkTarget(alternate.href, entry.loc, `hreflang ${alternate.hreflang}`);
    if (!other) continue;
    if (!sitemapUrls.has(normalizedUrl(alternate.href))) fail(`${entry.loc}: hreflang target absent from sitemap: ${alternate.href}`);
    const otherPage = readPage(other.file);
    if (otherPage.canonical.length !== 1 || !sameUrl(otherPage.canonical[0]?.href, alternate.href)) {
      fail(`${entry.loc}: hreflang target is not self-canonical: ${alternate.href}`);
    }
    if (alternate.hreflang !== "x-default" && otherPage.lang !== alternate.hreflang) {
      fail(`${entry.loc}: hreflang ${alternate.hreflang} target has html lang ${otherPage.lang}`);
    }
    if (!otherPage.alternates.some((link) => link.hreflang === lang && sameUrl(link.href, entry.loc))) {
      fail(`${entry.loc}: missing reciprocal hreflang from ${alternate.href}`);
    }
  }
  const sitemapAlternates = new Map(entry.alternates.map((link) => [link.hreflang, normalizedUrl(link.href)]));
  if (sitemapAlternates.size !== alternates.size || [...sitemapAlternates].some(([key, value]) => alternates.get(key) !== value)) {
    fail(`${entry.loc}: sitemap and HTML hreflang disagree`);
  }

  for (const anchor of page.anchors) {
    if (!anchor.href || /^(mailto|tel|javascript|data):/i.test(anchor.href)) continue;
    const other = checkTarget(anchor.href, entry.loc, "internal link");
    if (!other || !other.url.hash || !other.file.endsWith(".html")) continue;
    let id;
    try { id = decodeURIComponent(other.url.hash.slice(1)); } catch { id = other.url.hash.slice(1); }
    if (id && !readPage(other.file).ids.has(id)) fail(`${entry.loc}: link fragment has no target: ${anchor.href}`);
  }

  const text = visibleText(page.html);
  for (const [, rawAttrs, rawJson] of page.html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    if (attributes(rawAttrs).type !== "application/ld+json") continue;
    let json;
    try { json = JSON.parse(rawJson); } catch { fail(`${entry.loc}: invalid JSON-LD`); continue; }
    const nodes = Array.isArray(json) ? json : (json["@graph"] || [json]);
    for (const node of nodes) {
      if (node["@type"] !== "FAQPage") continue;
      for (const question of node.mainEntity || []) {
        const answer = question.acceptedAnswer?.text;
        if (!answer || !text.includes(visibleText(answer))) {
          fail(`${entry.loc}: FAQ answer missing from initial HTML: ${question.name}`);
        }
      }
    }
  }
}

const robotsPath = path.join(outDir, "robots.txt");
if (!fs.existsSync(robotsPath)) {
  fail("Missing robots.txt");
} else {
  const robots = fs.readFileSync(robotsPath, "utf8");
  if (/^Disallow:\s*\/\s*$/mi.test(robots)) fail("robots.txt blocks the entire site");
  if (!robots.includes(`${origin}/sitemap.xml`)) fail("robots.txt does not reference the sitemap");
}

if (errors.size) {
  console.error(`SEO export check failed (${errors.size} issues):\n${[...errors].slice(0, 40).map((error) => `- ${error}`).join("\n")}`);
  if (errors.size > 40) console.error(`... and ${errors.size - 40} more issues.`);
  process.exitCode = 1;
} else {
  console.log(`SEO export verified: ${entries.length} URLs, canonical/hreflang, redirects, language, metadata, FAQ HTML, and internal links.`);
}
