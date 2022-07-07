import classNames from "classnames";
import styles from "./flex.module.css";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  container?: boolean;
  item?: boolean;
  md?: boolean;
}

const Flex = (props: Props) => {
  const { className, container, item, md, ...passedProps } = props;
  return (
    <div
      className={classNames(
        {
          [styles.container]: container,
          [styles.item]: item,
          [styles.md]: md,
        },
        className
      )}
      {...passedProps}
    />
  );
};

export default Flex;
