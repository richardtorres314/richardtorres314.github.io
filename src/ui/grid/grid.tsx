import classNames from "classnames";
import styles from "./grid.module.css";
import { type HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  layout?: string;
}

export function Grid(props: Props): JSX.Element {
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
