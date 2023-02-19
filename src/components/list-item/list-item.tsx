import classNames from "classnames";
import styles from "./list-item.module.css";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLLIElement> {
  divider?: boolean;
}

export function ListItem(props: Props) {
  const { className, divider, ...passedProps } = props;

  return (
    <li
      className={classNames(styles.listItem, className, {
        [styles.divider]: divider,
      })}
      {...passedProps}
    />
  );
}
