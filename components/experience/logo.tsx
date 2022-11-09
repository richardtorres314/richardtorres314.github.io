import styles from "./experience.module.css";
import Grid from "components/grid/grid";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  company: string;
  logo: string;
}

const Logo = (props: Props) => {
  const { company, logo, ...passedProps } = props;

  return (
    <Grid style={{ gridArea: "logo" }} {...passedProps}>
      <img alt={`${company} Logo`} className={styles.logo} src={logo} />
    </Grid>
  );
};

export default Logo;
