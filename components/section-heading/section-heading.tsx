import classNames from "classnames";
import styles from "./section-heading.module.css";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  align?: string;
}

const SectionHeading = (props: Props) => {
  const { className, align, ...passedProps } = props;
  return (
    <h2
      className={classNames(styles.heading, className, {
        [styles.center]: align === "center",
      })}
      {...passedProps}
    />
  );
};

export default SectionHeading;
