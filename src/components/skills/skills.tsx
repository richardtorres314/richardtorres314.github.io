"use client";

import data from "@/data/skills.json";
import styles from "./skills.module.scss";
import classNames from "classnames";
import { Section } from "@/ui/section/section";
import { Fade } from "react-awesome-reveal";

export function Skills(): JSX.Element {
  return (
    <Section className={styles.section} id="skills">
      <Fade duration={1500}>
        <div className="container">
          <h2 className="title has-text-centered">
            <span className="has-text-danger">Ski</span>lls
          </h2>
          <div className="columns">
            {data.map((skill) => (
              <div className="column" key={skill.name}>
                <div className={classNames("card", styles.card)}>
                  <div className="card-content">
                    <h3
                      className={classNames(
                        "title is-uppercase is-6 has-text-centered has-text-weight-normal",
                        styles.title
                      )}
                    >
                      {skill.name}
                    </h3>
                    {skill.values.map((item) => (
                      <div
                        className={classNames(
                          "is-align-items-center mb-4",
                          styles.category
                        )}
                        key={item.name}
                      >
                        <div
                          className={classNames("mr-4", styles.categoryName)}
                        >
                          {item.name}
                        </div>
                        <div className="tags are-small">
                          {item.values.map((value) => (
                            <div
                              className="tag has-text-white"
                              key={value}
                              style={{ backgroundColor: item.color }}
                            >
                              {value}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Fade>
    </Section>
  );
}
