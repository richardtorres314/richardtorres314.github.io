import classNames from "classnames";
import styles from "./card.module.css";
import { HTMLAttributes } from "react";

const Card = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, ...passedProps } = props;
  return (
    <div className={classNames(styles.card, className)} {...passedProps} />
  );
};

export default Card;
