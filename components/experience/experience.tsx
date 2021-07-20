import experiences from '../../data/experience.json';
import styles from './experience.module.css';
import { Company } from './company';
import { Container } from 'components/container/container';
import { Dates } from './dates';
import { Duties } from './duties';
import { Grid } from 'components/grid/grid';
import { List } from 'components/list/list';
import { ListItem } from 'components/list-item/list-item';
import { Location } from './location';
import { Logo } from './logo';
import { Section } from 'components/section/section';
import { SectionHeading } from 'components/section-heading/section-heading';
import { Title } from './title';

export default function Experience() {
  return (
    <Section id="experience">
      <Container md>
        <SectionHeading align="center">
          <span>Exp</span>erience
        </SectionHeading>
        <List>
          {experiences.map((experience, index) => (
            <ListItem
              divider={index !== experiences.length - 1}
              className={styles.listItem}
              key={`experience-${index}`}
            >
              <Grid layout="experience">
                <Logo logo={experience.logo} company={experience.company} />
                <Company company={experience.company} />
                <Location location={experience.location} />
                <Title title={experience.title} />
                <Dates dates={experience.dates} />
                <Duties duties={experience.duties} />
              </Grid>
            </ListItem>
          ))}
        </List>
      </Container>
    </Section>
  );
}
