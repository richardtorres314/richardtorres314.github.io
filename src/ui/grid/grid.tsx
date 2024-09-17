import type { HTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./grid.module.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  layout?: string;
}

export function Grid(props: Props) {
  const { className, layout, ...passedProps } = props;

  return (
    <div
      className={classNames(
        styles.grid,
        className,
        layout !== undefined && styles[layout]
      )}
      {...passedProps}
    />
  );
}
