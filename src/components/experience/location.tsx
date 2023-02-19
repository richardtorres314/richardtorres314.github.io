import styles from "./experience.module.css";
import { Grid } from "@/components/grid/grid";

interface Props {
  location: string;
}

export function Location(props: Props) {
  const { location } = props;

  return (
    <Grid className={styles.location} style={{ gridArea: "location" }}>
      {location}
    </Grid>
  );
}
