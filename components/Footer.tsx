import Link from "next/link";
import { Lang, SUPPORTED_LANGS, LANG_LABELS, getLangPath } from "@/lib/i18n";
import { Translations } from "@/lib/translations";

interface FooterProps {
  t: Translations;
  lang: Lang;
}

export default function Footer({ t, lang }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <p className="font-black text-gray-900 text-lg mb-2">
              Reaction Time Test
            </p>
            <p className="text-sm text-gray-400">{t.footerTagline}</p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-semibold text-gray-600 text-sm uppercase tracking-wide mb-3">
              Navigation
            </p>
            <ul className="space-y-2">
              {[
                { href: getLangPath(lang, ""), label: t.navHome },
                { href: getLangPath(lang, "/blog"), label: t.navBlog },
                { href: getLangPath(lang, "/about"), label: t.navAbout },
                { href: getLangPath(lang, "/contact"), label: t.navContact },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-gray-700 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div>
            <p className="font-semibold text-gray-600 text-sm uppercase tracking-wide mb-3">
              Languages
            </p>
            <ul className="space-y-2">
              {SUPPORTED_LANGS.map((l) => (
                <li key={l}>
                  <Link
                    href={getLangPath(l, "")}
                    className={`text-sm transition-colors ${
                      l === lang
                        ? "text-gray-900 font-semibold"
                        : "text-gray-400 hover:text-gray-700"
                    }`}
                  >
                    {LANG_LABELS[l]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-400">
            © {year} ReactionTimeTestOnline.com — {t.footerRights}
          </p>
          <div className="flex gap-4 text-xs text-gray-400">
            <Link href={getLangPath(lang, "/about")} className="hover:text-gray-600 transition-colors">
              Privacy
            </Link>
            <Link href={getLangPath(lang, "/contact")} className="hover:text-gray-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
