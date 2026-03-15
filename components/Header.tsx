"use client";

import Link from "next/link";
import { useState } from "react";
import { Lang, SUPPORTED_LANGS, LANG_LABELS, getLangPath } from "@/lib/i18n";
import { Translations } from "@/lib/translations";

interface HeaderProps {
  t: Translations;
  lang: Lang;
  currentPath?: string; // e.g. "" | "/blog" | "/about" | "/contact"
}

export default function Header({ t, lang, currentPath = "" }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navLinks = [
    { href: getLangPath(lang, ""), label: t.navHome },
    { href: getLangPath(lang, "/blog"), label: t.navBlog },
    { href: getLangPath(lang, "/about"), label: t.navAbout },
    { href: getLangPath(lang, "/contact"), label: t.navContact },
  ];

  const isActive = (href: string) => {
    const normalized = href === "/" ? "" : href;
    return currentPath === normalized || currentPath === normalized + "/";
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href={getLangPath(lang, "")}
          className="font-black text-xl text-gray-900 tracking-tight hover:text-gray-600 transition-colors"
        >
          <span className="hidden sm:inline">Reaction Time Test</span>
          <span className="sm:hidden">RTT</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side: Language switcher + mobile menu toggle */}
        <div className="flex items-center gap-2">
          {/* Language dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangOpen((o) => !o)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              aria-label="Select language"
            >
              <span>🌐</span>
              <span className="hidden sm:inline">{LANG_LABELS[lang]}</span>
              <span className="text-xs">▾</span>
            </button>

            {langOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setLangOpen(false)}
                />
                <div className="absolute right-0 top-full mt-1 w-44 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-20">
                  {SUPPORTED_LANGS.map((l) => (
                    <Link
                      key={l}
                      href={getLangPath(l, currentPath)}
                      onClick={() => setLangOpen(false)}
                      className={`flex items-center justify-between px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors ${
                        l === lang
                          ? "text-gray-900 font-semibold"
                          : "text-gray-500"
                      }`}
                    >
                      <span>{LANG_LABELS[l]}</span>
                      {l === lang && <span className="text-green-500">✓</span>}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors mt-1 ${
                isActive(link.href)
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
