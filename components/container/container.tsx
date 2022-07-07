import classnames from "classnames";
import styles from "./container.module.css";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  md?: boolean;
}

const Container = (props: Props) => {
  const { className, md, ...passedProps } = props;
  return (
    <div
      className={classnames(styles.container, className, {
        [styles.md]: md,
      })}
      {...passedProps}
    />
  );
};

export default Container;
