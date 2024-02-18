import classNames from "classnames";
import { type HTMLAttributes } from "react";
import styles from "./section.module.scss";

export function Section({
  className,
  ...passedProps
}: HTMLAttributes<HTMLElement>): JSX.Element {
  return (
    <section
      className={classNames("section", styles.section, className)}
      {...passedProps}
    />
  );
}
