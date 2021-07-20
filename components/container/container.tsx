import classnames from 'classnames';
import styles from './container.module.css';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  md?: boolean;
}

export function Container({ className, md, ...passedProps }: Props) {
  return (
    <div
      className={classnames(styles.container, className, {
        [styles.md]: md,
      })}
      {...passedProps}
    />
  );
}
