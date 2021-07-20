import classNames from 'classnames';
import styles from './card.module.css';
import { HTMLAttributes } from 'react';

export function Card({
  className,
  ...passedProps
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={classNames(styles.card, className)} {...passedProps} />
  );
}
