import classNames from 'classnames';
import styles from './section-heading.module.css';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  align?: string;
}

export function SectionHeading({ className, align, ...passedProps }: Props) {
  return (
    <h2
      className={classNames(styles.heading, className, {
        [styles.center]: align === "center",
      })}
      {...passedProps}
    />
  );
}
