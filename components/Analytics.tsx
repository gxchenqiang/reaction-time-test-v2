"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/challenge/analytics";
let lastPath: string | null = null;
export default function Analytics() {
  const path = usePathname();
  useEffect(() => {
    if (path !== lastPath) {
      lastPath = path;
      trackEvent("pageview");
    }
  }, [path]);
  return null;
}
