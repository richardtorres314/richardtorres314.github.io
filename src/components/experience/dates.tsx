import styles from "./experience.module.css";
import { Grid } from "@/components/grid/grid";

interface Props {
  dates: string;
}

export function Dates(props: Props) {
  const { dates } = props;

  return (
    <Grid style={{ gridArea: "dates" }} className={styles.dates}>
      {dates}
    </Grid>
  );
}
