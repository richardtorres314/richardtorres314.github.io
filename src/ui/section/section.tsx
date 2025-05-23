import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Section({
  className,
  children,
  ...passedProps
}: HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={cn(
        "p-12 scroll-mt-24 print:break-inside-avoid print:p-0",
        className
      )}
      {...passedProps}
    >
      {children}
    </section>
  );
}
