import styles from './experience.module.css';
import { Grid } from 'components/grid/grid';

interface Props {
  title: string;
}

export function Title({ title }: Props) {
  return (
    <Grid style={{ gridArea: "title" }} className={styles.title}>
      {title}
    </Grid>
  );
}
