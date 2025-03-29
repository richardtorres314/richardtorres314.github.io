import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Grid(props: HTMLAttributes<HTMLDivElement>) {
  const { className, ...passedProps } = props;

  return <div className={cn("grid gap-2", className)} {...passedProps} />;
}
