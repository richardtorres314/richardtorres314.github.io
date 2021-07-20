import classNames from 'classnames';
import styles from './chip.module.css';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  label: string;
}

export function Chip({ className, label, ...passedProps }: Props) {
  return (
    <div className={classNames(styles.chip, className)} {...passedProps}>
      {label}
    </div>
  );
}
