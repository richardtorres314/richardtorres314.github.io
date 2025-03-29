import { Menu } from "@/icons/menu";
import { Button } from "@/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/ui/navigation-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover";
import { Logo } from "./logo";
import { MenuList } from "./menu-list";
import { ThemeButton } from "./theme-button";

export function Header() {
  return (
    <header
      className="fixed top-0 z-50 w-full bg-inherit p-4 print:static print:pb-12"
      aria-label="main navigation"
    >
      <div className="flex justify-between md:container">
        <div className="flex w-full items-center justify-between">
          <Logo />
          <div className="flex gap-2 xl:hidden print:hidden">
            <ThemeButton />
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  className="px-2 xl:hidden dark:bg-background dark:fill-white dark:hover:bg-accent"
                >
                  <span
                    className="h-4 w-4 print:fill-black"
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
                  className="max-xl:block max-xl:max-w-full"
                >
                  <NavigationMenuList className="block max-xl:space-y-1 max-xl:space-x-0">
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
