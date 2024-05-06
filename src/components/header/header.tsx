"use client";

import { type MouseEvent } from "react";
import links from "./links.json";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/ui/navigation-menu";
import Link from "next/link";
import { Sun } from "@/icons/sun";
import { Button } from "@/ui/button";
import { Menu } from "@/icons/menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover";

export function Header() {
  const router = useRouter();

  function handleOnClickLogo(event: MouseEvent<HTMLAnchorElement>) {
    event.stopPropagation();
    event.preventDefault();

    if (window.location.pathname !== "/") {
      window.location.replace("/");
    } else {
      const main = document.querySelector("main");
      main?.scrollIntoView();
      router.replace("/", {
        scroll: false
      });
    }
  }

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
    <header
      className="fixed top-0 p-4 w-full z-50 bg-inherit print:static print:pb-12"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="md:container flex justify-between">
        <div className="flex justify-between items-center w-full">
          <a href="/" onClick={handleOnClickLogo} className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              draggable="false"
              alt="Richard Torres"
              src="/images/me.jpg"
              className="h-14 w-14 rounded-full object-cover"
            />
            <div className="ml-4">
              <div className="font-light text-2xl">
                Richard <span className="font-bold">Torres</span>
              </div>
              <div className="text-md">Software Engineer</div>
            </div>
          </a>
          <div className="flex xl:hidden gap-2">
            <Button
              onClick={handleOnClickThemeButton}
              variant="ghost"
              className="dark:fill-white dark:bg-background dark:hover:bg-accent px-2"
            >
              <span className="w-4 h-4 text-foreground/80 hover:text-foreground/60">
                <Sun />
              </span>
            </Button>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  className="xl:hidden dark:fill-white dark:bg-background dark:hover:bg-accent px-2"
                >
                  <a
                    role="button"
                    className="w-4 h-4 print:fill-black"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navMenu"
                  >
                    <Menu />
                  </a>
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <NavigationMenu orientation="vertical">
                  <NavigationMenuList className="block">
                    {links.map((link) => (
                      <NavigationMenuItem key={link.url}>
                        {/* Workaround needed for next.js scroll behavior issue: https://github.com/vercel/next.js/issues/45187 */}
                        <Link href={link.url} legacyBehavior passHref>
                          <NavigationMenuLink
                            className={classNames(
                              "uppercase",
                              navigationMenuTriggerStyle()
                            )}
                          >
                            {link.text}
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <NavigationMenu className="hidden xl:flex">
          <NavigationMenuList>
            {links.map((link) => (
              <NavigationMenuItem key={link.url}>
                <Link href={link.url} passHref legacyBehavior>
                  <NavigationMenuLink
                    className={classNames(
                      "uppercase",
                      navigationMenuTriggerStyle()
                    )}
                    href={link.url}
                  >
                    {link.text}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <Button
                onClick={handleOnClickThemeButton}
                variant="ghost"
                className="dark:fill-white dark:bg-background dark:hover:bg-accent"
              >
                <span className="w-4 h-4">
                  <Sun />
                </span>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
