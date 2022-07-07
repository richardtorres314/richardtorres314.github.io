import classNames from "classnames";
import styles from "./section.module.css";
import { HTMLAttributes } from "react";

const Section = (props: HTMLAttributes<HTMLElement>) => {
  const { className, ...passedProps } = props;
  return (
    <section
      className={classNames(styles.section, className)}
      {...passedProps}
    />
  );
};

export default Section;
