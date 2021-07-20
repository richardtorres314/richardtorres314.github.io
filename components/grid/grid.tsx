import classNames from 'classnames';
import styles from './grid.module.css';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  layout?: string;
}

export function Grid({ className, layout, ...passedProps }: Props) {
  return (
    <div
      className={classNames(styles.grid, className, {
        [styles.experience]: layout === "experience",
      })}
      {...passedProps}
    />
  );
}
