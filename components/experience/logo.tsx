import styles from './experience.module.css';
import { Grid } from 'components/grid/grid';

interface Props {
  company: string;
  logo: string;
}

export function Logo({ company, logo }: Props) {
  return (
    <Grid style={{ gridArea: "logo" }}>
      <img alt={`${company} Logo`} className={styles.logo} src={logo} />
    </Grid>
  );
}
