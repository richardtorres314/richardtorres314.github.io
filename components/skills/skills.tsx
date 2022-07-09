import data from "data/skills.json";
import styles from "./skills.module.css";
import Card from "components/card/card";
import Chip from "components/chip/chip";
import Container from "components/container/container";
import Flex from "components/flex/flex";
import Section from "components/section/section";
import SectionHeading from "components/section-heading/section-heading";

const Skills = () => (
  <Section className={styles.skillsWrapper} id="skills" withPageBreak>
    <Container>
      <SectionHeading align="center">
        <span>Ski</span>lls
      </SectionHeading>
      <Flex container>
        {data.map((skill) => (
          <Flex item md key={skill.name} className={styles.cardWrapper}>
            <Card>
              <h3 className={styles.subheading}>{skill.name}</h3>
              {skill.values.map((item) => (
                <Flex container key={item.name}>
                  <Flex item className={styles.itemContainer}>
                    <div key={item.name}>{item.name}</div>
                  </Flex>
                  <Flex item>
                    <Flex container>
                      {item.values.map((value) => (
                        <Flex item key={value}>
                          <Chip
                            label={value}
                            style={{
                              backgroundColor: item.color,
                              color: "white",
                            }}
                          />
                        </Flex>
                      ))}
                    </Flex>
                  </Flex>
                </Flex>
              ))}
            </Card>
          </Flex>
        ))}
      </Flex>
    </Container>
  </Section>
);

export default Skills;
