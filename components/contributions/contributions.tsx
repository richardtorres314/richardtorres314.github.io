import Container from "components/container/container";
import List from "components/list/list";
import SectionHeading from "components/section-heading/section-heading";
import Section from "components/section/section";
import styles from "./contributions.module.css";
import contributions from "../../data/contributions.json";
import Link from "next/link";
import ListItem from "components/list-item/list-item";
import Grid from "components/grid/grid";
import Logo from "components/experience/logo";

const Contributions = () => (
  <Section
    className={styles.contributionsWrapper}
    id="contributions"
    withPageBreak
  >
    <Container md>
      <SectionHeading align="center">
        <span>O</span>pen <span>S</span>ource <span>Con</span>tributions
      </SectionHeading>
      <List className={styles.contributions}>
        {contributions.map((contribution) => (
          <ListItem
            key={contribution.projectName}
            className={styles.contribution}
          >
            <Grid layout="contributions">
              <Logo
                logo={contribution.image}
                company={contribution.projectName}
                className={styles.logo}
              />
              <div style={{ gridArea: "company" }}>
                <Link rel="noreferrer" target="_blank" href={contribution.url}>
                  {contribution.projectName}
                </Link>
              </div>
              <div style={{ gridArea: "version" }}>
                Contributed Version: {contribution.version}
              </div>
            </Grid>
          </ListItem>
        ))}
      </List>
    </Container>
  </Section>
);

export default Contributions;
