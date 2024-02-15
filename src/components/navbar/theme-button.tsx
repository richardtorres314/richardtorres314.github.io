import { Sun } from "@/icons/sun";
import classNames from "classnames";
import styles from "./navbar.module.scss";
import { HTMLAttributes } from "react";

export function ThemeButton({ className }: HTMLAttributes<HTMLDivElement>) {
  function handleOnClickThemeButton() {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      document.body.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    } else if (currentTheme === "light") {
      document.body.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    }
  }

  return (
    <div
      className={classNames(
        "navbar-item",
        styles.themeButtonContainer,
        className,
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
