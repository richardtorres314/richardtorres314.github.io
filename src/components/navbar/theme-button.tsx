import { Sun } from "@/icons/sun";
import classNames from "classnames";
import styles from "./navbar.module.scss";
import { HTMLAttributes } from "react";

export function ThemeButton({ className }: HTMLAttributes<HTMLDivElement>) {
  function handleOnClickThemeButton() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const currentTheme = localStorage.getItem("theme");

    if (!currentTheme) {
      if (prefersDarkScheme.matches) {
        document.body.classList.toggle("light-mode");
        localStorage.setItem("theme", "light");
      } else {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("theme", "dark");
      }
    } else if (currentTheme === "dark") {
      document.body.classList.toggle("dark-mode");
      localStorage.setItem("theme", "dark");
    } else if (currentTheme === "light") {
      document.body.classList.toggle("light-mode");
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <div
      className={classNames(
        "navbar-item",
        styles.themeButtonContainer,
        className
      )}
    >
      <a
        role="button"
        className={classNames("icon", styles.themeButton)}
        onClick={handleOnClickThemeButton}
      >
        <Sun />
      </a>
    </div>
  );
}
