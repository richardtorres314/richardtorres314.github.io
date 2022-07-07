import styles from "./experience.module.css";
import Grid from "components/grid/grid";

interface Props {
  company: string;
}

const Company = (props: Props) => {
  const { company } = props;
  return (
    <Grid className={styles.company} style={{ gridArea: "company" }}>
      {company}
    </Grid>
  );
};

export default Company;
