import styles from "./experience.module.css";
import Grid from "components/grid/grid";

interface Props {
  dates: string;
}

const Dates = (props: Props) => {
  const { dates } = props;
  return (
    <Grid style={{ gridArea: "dates" }} className={styles.dates}>
      {dates}
    </Grid>
  );
};

export default Dates;
