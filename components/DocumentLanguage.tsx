"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { DEFAULT_LANG, isValidLang, LANG_HREFLANG } from "@/lib/i18n";

// Static HTML gets its language during postbuild. Keep it in sync when Next.js
// switches languages without loading a new document.
export default function DocumentLanguage() {
  const pathname = usePathname();

  useEffect(() => {
    const prefix = pathname.split("/")[1]?.replace(/\.html$/, "") ?? "";
    const lang = isValidLang(prefix) ? prefix : DEFAULT_LANG;
    document.documentElement.lang = LANG_HREFLANG[lang];
  }, [pathname]);

  return null;
}
