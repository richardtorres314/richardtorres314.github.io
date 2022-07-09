import classNames from "classnames";
import styles from "./section.module.css";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  withPageBreak?: boolean;
}

const Section = (props: Props) => {
  const { className, withPageBreak, ...passedProps } = props;
  return (
    <section
      className={classNames(
        styles.section,
        withPageBreak && styles.withPageBreak,
        className
      )}
      {...passedProps}
    />
  );
};

export default Section;
