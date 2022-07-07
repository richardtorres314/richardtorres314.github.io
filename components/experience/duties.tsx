import styles from "./experience.module.css";
import Done from "components/icons/done";
import Flex from "components/flex/flex";
import Grid from "components/grid/grid";
import List from "components/list/list";
import ListItem from "components/list-item/list-item";

interface Props {
  duties: string[];
}

const Duties = (props: Props) => {
  const { duties } = props;
  return (
    <Grid style={{ gridArea: "duties" }}>
      <List>
        {duties.map((duty, index) => (
          <ListItem key={`duty-${index}`}>
            <Flex container className={styles.dutyContainer}>
              <Flex item className={styles.dutyIcon}>
                <Done />
              </Flex>
              <Flex item className={styles.dutyText}>
                {duty}
              </Flex>
            </Flex>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

export default Duties;
