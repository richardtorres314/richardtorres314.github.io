"use client";

import { cn } from "@/lib/utils";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import links from "./links.json";

export function MenuList() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => (
        <NavigationMenuItem key={link.url} className="w-full">
          {/* Workaround needed for next.js scroll behavior issue: https://github.com/vercel/next.js/issues/45187 */}
          <Link href={link.url} legacyBehavior passHref>
            <NavigationMenuLink
              active={link.url === pathname}
              className={cn(
                "uppercase first:w-full print:text-xs",
                navigationMenuTriggerStyle(),
              )}
            >
              {link.text}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      ))}
    </>
  );
}
