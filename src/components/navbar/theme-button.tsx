import { Sun } from "@/icons/sun";
import classNames from "classnames";
import styles from "./navbar.module.scss";
import { type HTMLAttributes } from "react";

export function ThemeButton({
  className
}: HTMLAttributes<HTMLDivElement>): JSX.Element {
  function handleOnClickThemeButton(): void {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    } else if (currentTheme === "light") {
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
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
