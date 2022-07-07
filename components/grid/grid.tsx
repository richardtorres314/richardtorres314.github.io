import classNames from "classnames";
import styles from "./grid.module.css";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  layout?: string;
}

const Grid = (props: Props) => {
  const { className, layout, ...passedProps } = props;
  return (
    <div
      className={classNames(styles.grid, className, {
        [styles.experience]: layout === "experience",
      })}
      {...passedProps}
    />
  );
};

export default Grid;
