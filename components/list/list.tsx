import classNames from 'classnames';
import styles from './list.module.css';
import { HTMLAttributes } from 'react';

export function List({
  className,
  ...passedProps
}: HTMLAttributes<HTMLUListElement>) {
  return <ul className={classNames(styles.list, className)} {...passedProps} />;
}
