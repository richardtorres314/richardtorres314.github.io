import styles from './experience.module.css';
import { Grid } from 'components/grid/grid';

interface Props {
  location: string;
}

export function Location({ location }: Props) {
  return (
    <Grid className={styles.location} style={{ gridArea: "location" }}>
      {location}
    </Grid>
  );
}
