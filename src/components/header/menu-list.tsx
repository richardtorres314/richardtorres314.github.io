"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/ui/navigation-menu";
import links from "./links.json";

export function MenuList() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => (
        <NavigationMenuItem key={link.url} className="w-full">
          <NavigationMenuLink
            asChild
            active={link.url === pathname}
            className={cn(
              "uppercase first:w-full print:text-xs",
              navigationMenuTriggerStyle(),
            )}
          >
            <Link href={link.url}>{link.text}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    </>
  );
}
