import styles from './experience.module.css';
import { Done } from '@material-ui/icons';
import { Flex } from 'components/flex/flex';
import { Grid } from 'components/grid/grid';
import { List } from 'components/list/list';
import { ListItem } from 'components/list-item/list-item';

interface Props {
  duties: string[];
}

export function Duties({ duties }: Props) {
  return (
    <Grid style={{ gridArea: "duties" }}>
      <List>
        {duties.map((duty, index) => (
          <ListItem key={`duty-${index}`}>
            <Flex className={styles.dutyContainer}>
              <Flex className={styles.dutyIcon}>
                <Done fontSize="small" />
              </Flex>
              <Flex className={styles.dutyText}>{duty}</Flex>
            </Flex>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
}
