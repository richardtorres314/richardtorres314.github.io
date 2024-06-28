import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/ui/navigation-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover";

import { Button } from "@/ui/button";
import { Logo } from "./logo";
import { Menu } from "@/icons/menu";
import { MenuList } from "./menu-list";
import { ThemeButton } from "./theme-button";

export function Header() {
  return (
    <header
      className="fixed top-0 p-4 w-full z-50 bg-inherit print:static print:pb-12"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="md:container flex justify-between">
        <div className="flex justify-between items-center w-full">
          <Logo />
          <div className="flex xl:hidden gap-2">
            <ThemeButton />
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  className="xl:hidden dark:fill-white dark:bg-background dark:hover:bg-accent px-2"
                >
                  <span
                    role="button"
                    className="w-4 h-4 print:fill-black"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navMenu"
                  >
                    <Menu />
                  </span>
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <NavigationMenu
                  orientation="vertical"
                  className="max-xl:max-w-full max-xl:block"
                >
                  <NavigationMenuList className="block max-xl:space-x-0 max-xl:space-y-1">
                    <MenuList />
                  </NavigationMenuList>
                </NavigationMenu>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <NavigationMenu className="hidden xl:flex">
          <NavigationMenuList>
            <MenuList />
            <NavigationMenuItem>
              <ThemeButton />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
