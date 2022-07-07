import classNames from "classnames";
import styles from "./list.module.css";
import { HTMLAttributes } from "react";

const List = (props: HTMLAttributes<HTMLUListElement>) => {
  const { className, ...passedProps } = props;
  return <ul className={classNames(styles.list, className)} {...passedProps} />;
};

export default List;
