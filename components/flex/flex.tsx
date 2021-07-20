import classNames from 'classnames';
import styles from './flex.module.css';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  container?: boolean;
  item?: boolean;
  md?: boolean;
}

export function Flex({
  className,
  container,
  item,
  md,
  ...passedProps
}: Props) {
  return (
    <div
      className={classNames(
        {
          [styles.container]: container,
          [styles.item]: item,
          [styles.md]: md,
        },
        className
      )}
      {...passedProps}
    />
  );
}
