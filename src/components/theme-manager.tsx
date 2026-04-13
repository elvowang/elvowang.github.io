"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ThemeManager = () => {
  const pathname = usePathname();

  useEffect(() => {
    const isAi = pathname.startsWith("/my-ai-explore");
    if (isAi) {
      document.body.classList.add("ai-page");
      document.body.style.backgroundColor = "#0a0a0a";
    } else {
      document.body.classList.remove("ai-page");
      document.body.style.backgroundColor = "";
    }
  }, [pathname]);

  return null;
};

export default ThemeManager;
