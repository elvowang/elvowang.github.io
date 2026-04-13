"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const GA_ID = "G-2MK9HEZ2Z3";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname();

  // Track page views on route change
  useEffect(() => {
    if (typeof window.gtag !== "function") return;
    window.gtag("config", GA_ID, { page_path: pathname });
  }, [pathname]);

  // Track link clicks
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest("a");
      if (!target || typeof window.gtag !== "function") return;

      const href = target.getAttribute("href") ?? "";
      const isExternal =
        href.startsWith("http") && !href.includes(window.location.hostname);

      window.gtag("event", "click", {
        event_category: isExternal ? "outbound_link" : "internal_link",
        event_label: href,
        link_text: target.innerText.trim().slice(0, 100),
      });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
