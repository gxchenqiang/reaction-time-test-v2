"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState, ReactNode } from "react";
import { Lang, getLangPath } from "@/lib/i18n";

/** Keep the opaque challenge fragment intact; translating never rewrites a score. */
export default function LanguageLink({
  lang,
  path,
  children,
  className,
  onNavigate,
}: {
  lang: Lang;
  path: string;
  children: ReactNode;
  className?: string;
  onNavigate?: () => void;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [suffix, setSuffix] = useState("");
  const challenge = path.replace(/\/$/, "") === "/challenge";
  useEffect(() => {
    const update = () =>
      setSuffix(challenge ? location.search + location.hash : "");
    update();
    window.addEventListener("hashchange", update);
    window.addEventListener("popstate", update);
    window.addEventListener("challengecontextchange", update);
    return () => {
      window.removeEventListener("hashchange", update);
      window.removeEventListener("popstate", update);
      window.removeEventListener("challengecontextchange", update);
    };
  }, [challenge, pathname]);
  return (
    <Link
      href={getLangPath(lang, path) + suffix}
      className={className}
      prefetch={challenge ? false : undefined}
      onClick={(event) => {
        onNavigate?.();
        if (
          !challenge ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey
        )
          return;
        event.preventDefault();
        // Read the current URL at activation as well, in case the hash changed in this frame.
        router.push(getLangPath(lang, path) + location.search + location.hash);
      }}
    >
      {children}
    </Link>
  );
}
