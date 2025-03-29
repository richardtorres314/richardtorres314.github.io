"use client";

import { Sun } from "@/icons/sun";
import { Button } from "@/ui/button";

export function ThemeButton() {
  function handleOnClickThemeButton() {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else if (currentTheme === "light") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      if (document.documentElement.classList.contains("dark")) {
        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
      } else {
        localStorage.setItem("theme", "light");
        document.documentElement.classList.add("dark");
      }
    }
  }

  return (
    <Button
      onClick={handleOnClickThemeButton}
      variant="ghost"
      className="px-2 dark:bg-background dark:fill-white dark:hover:bg-accent"
    >
      <span className="size-4 text-foreground/80 hover:text-foreground/60">
        <Sun />
      </span>
    </Button>
  );
}
