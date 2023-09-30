import classNames from "classnames";
import { HTMLAttributes } from "react";
import styles from "./section.module.scss";

export function Section({
  className,
  ...passedProps
}: HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={classNames("section", styles.section, className)}
      {...passedProps}
    />
  );
}
