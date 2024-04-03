// Workaround issue for next.js issue: https://github.com/vercel/next.js/issues/59444
"use client";

import { HTMLAttributes, useEffect } from "react";

export function LatentThemeChecker({ children }: HTMLAttributes<HTMLElement>) {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return children;
}
