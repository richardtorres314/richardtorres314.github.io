import styles from "./experience.module.css";
import Grid from "components/grid/grid";

interface Props {
  company: string;
  logo: string;
}

const Logo = (props: Props) => {
  const { company, logo } = props;
  return (
    <Grid style={{ gridArea: "logo" }}>
      <img alt={`${company} Logo`} className={styles.logo} src={logo} />
    </Grid>
  );
};

export default Logo;
