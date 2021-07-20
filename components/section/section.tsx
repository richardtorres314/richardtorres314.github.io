import classNames from 'classnames';
import styles from './section.module.css';
import { HTMLAttributes } from 'react';

export function Section({
  className,
  ...passedProps
}: HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={classNames(styles.section, className)}
      {...passedProps}
    />
  );
}
