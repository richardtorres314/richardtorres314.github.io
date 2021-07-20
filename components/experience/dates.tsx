import styles from './experience.module.css';
import { Grid } from 'components/grid/grid';

interface Props {
  dates: string;
}

export function Dates({ dates }: Props) {
  return (
    <Grid style={{ gridArea: "dates" }} className={styles.dates}>
      {dates}
    </Grid>
  );
}
