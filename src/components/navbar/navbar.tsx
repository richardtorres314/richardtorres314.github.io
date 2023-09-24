"use client";

import { MouseEvent } from "react";
import links from "@/data/links.json";
import classNames from "classnames";
import styles from "./navbar.module.scss";

export function Navbar() {
  function handleOnClick(event: MouseEvent<HTMLAnchorElement>) {
    event.stopPropagation();
    event.preventDefault();
    const sectionId = event.currentTarget.href.split("#")[1];
    const element = document.getElementById(sectionId);
    const header = document.getElementById("header");
    if (!element || !header) return;
    if (sectionId === "about") {
      window.scrollBy({
        top:
          element.getBoundingClientRect().top! -
          header.getBoundingClientRect().height -
          24,
        behavior: "smooth",
      });
    } else {
      window.scrollBy({
        top:
          element.getBoundingClientRect().top! -
          header.getBoundingClientRect().height +
          24,
        behavior: "smooth",
      });
    }
  }

  const handleClickBurger = (event: MouseEvent<HTMLAnchorElement>) => {
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
  };

  return (
    <nav
      className="navbar is-fixed-top p-4"
      role="navigation"
      area-label="main navigation"
      id="header"
    >
      <div className="container is-align-items-center">
        <div className="navbar-brand is-flex is-align-items-center">
          <figure id="avatar" className="image is-64x64">
            <img
              draggable="false"
              alt="Richard Torres"
              src="images/me.jpg"
              className="is-rounded"
              style={{ aspectRatio: "1 / 1", objectFit: "cover" }}
            />
          </figure>
          <div className="ml-4">
            <h1
              id="title"
              className={classNames(
                "title has-text-weight-light is-3",
                styles.title
              )}
            >
              Richard <span className="has-text-weight-bold">Torres</span>
            </h1>
            <h2 id="subtitle" className="subtitle is-5">
              Software Engineer
            </h2>
          </div>
          <a
            role="button"
            className="navbar-burger"
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
        <div className="navbar-menu navbar-end" id="navbar-menu">
          {links.map((link) => (
            <a
              key={link.url}
              className="navbar-item is-size-5 is-uppercase"
              href={link.url}
              {...(link.url[0] === "#" && { onClick: handleOnClick })}
              {...(link.url[0] !== "#" && {
                rel: "noreferrer",
                target: "_blank",
              })}
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
