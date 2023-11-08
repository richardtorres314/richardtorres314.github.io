"use client";

import { MouseEvent, useEffect } from "react";
import links from "@/data/links.json";
import classNames from "classnames";
import styles from "./navbar.module.scss";
import { useRouter } from "next/navigation";
import { ThemeButton } from "./theme-button";

export function Navbar() {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (!theme) {
      const prefersDarkScheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );
      localStorage.setItem(
        "theme",
        prefersDarkScheme.matches ? "dark" : "light"
      );
    } else {
      if (theme === "light") {
        document.body.classList.add("light-mode");
      } else {
        localStorage.setItem("theme", "dark");
      }
    }
  }, []);

  const router = useRouter();

  function handleOnClick(event: MouseEvent<HTMLAnchorElement>) {
    event.stopPropagation();
    event.preventDefault();

    if (window.location.pathname !== "/") {
      window.location.replace("/");
    } else {
      const main = document.querySelector("main");
      main?.scrollIntoView();
      router.replace("/", {
        scroll: false,
      });
    }
  }

  function handleClickBurger(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const menu = document.getElementById("navbar-menu");
    if (!menu) return;
    if (menu.classList.contains("is-active")) {
      menu.classList.remove("is-active");
      event.currentTarget.classList.remove("is-active");
    } else {
      menu.classList.add("is-active");
      event.currentTarget.classList.add("is-active");
    }
  }

  return (
    <nav
      className="navbar is-fixed-top p-4 is-align-items-center"
      role="navigation"
      area-label="main navigation"
      id="header"
    >
      <div className="container is-align-items-center">
        <div className="navbar-brand">
          <a
            href="/"
            onClick={handleOnClick}
            className="is-flex is-align-items-center"
          >
            <figure id="avatar" className="image is-64x64">
              <img
                draggable="false"
                alt="Richard Torres"
                src="images/me.jpg"
                className={classNames("is-rounded", styles.image)}
              />
            </figure>
            <div className="ml-4">
              <div
                id="title"
                className={classNames(
                  "title has-text-weight-light is-3",
                  styles.title
                )}
              >
                Richard <span className="has-text-weight-bold">Torres</span>
              </div>
              <div id="subtitle" className="subtitle is-5">
                Software Engineer
              </div>
            </div>
          </a>
          <ThemeButton className="is-hidden-desktop" />
          <a
            role="button"
            className={classNames("navbar-burger", styles.burger)}
            id="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navMenu"
            onClick={handleClickBurger}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          className={classNames("navbar-menu navbar-end", styles.navbarMenu)}
          id="navbar-menu"
        >
          {links.map((link) => (
            <a
              key={link.url}
              className={classNames(
                "navbar-item is-size-6 is-uppercase",
                styles.navbarItem
              )}
              href={link.url}
              {...(link.url[1] !== "#" && {
                rel: "noreferrer",
                target: "_blank",
              })}
            >
              {link.text}
            </a>
          ))}
          <ThemeButton className="is-hidden-touch" />
        </div>
      </div>
    </nav>
  );
}
