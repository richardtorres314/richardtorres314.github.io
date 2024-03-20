import classNames from "classnames";
import { type HTMLAttributes } from "react";

export function Section({
  className,
  children,
  ...passedProps
}: HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={classNames(
        "p-12 scroll-mt-24 print:break-inside-avoid",
        className
      )}
      {...passedProps}
    >
      {children}
    </section>
  );
}
