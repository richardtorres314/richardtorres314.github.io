import styles from './experience.module.css';
import { Grid } from 'components/grid/grid';

interface Props {
  company: string;
}

export function Company({ company }: Props) {
  return (
    <Grid className={styles.company} style={{ gridArea: "company" }}>
      {company}
    </Grid>
  );
}
