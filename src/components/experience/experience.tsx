"use client";

import experiences from "@/data/experience.json";
import { Grid } from "@/ui/grid/grid";
import { Done } from "@/icons/done";
import { Section } from "@/ui/section/section";
import classNames from "classnames";
import styles from "./experience.module.scss";
import { Fade } from "react-awesome-reveal";

export function Experience(): JSX.Element {
  return (
    <Fade duration={1500}>
      <Section id="experience">
        <div className="container is-max-desktop">
          <h2 className="title has-text-centered">
            <span className="has-text-danger">Exp</span>erience
          </h2>
          <ul>
            {experiences.map((experience, index) => (
              <li key={`experience-${index}`} className="mb-4">
                <Grid layout="experience">
                  <figure
                    className={classNames(
                      "image is-flex is-align-items-center is-32x32",
                      styles.image
                    )}
                  >
                    <img
                      alt={`${experience.company} Logo`}
                      src={experience.logo}
                    />
                  </figure>
                  <div
                    className={classNames(
                      "has-text-weight-semibold",
                      styles.company
                    )}
                  >
                    {experience.company}
                  </div>
                  <div
                    className={classNames(
                      "has-text-danger has-text-right",
                      styles.location
                    )}
                  >
                    {experience.location}
                  </div>
                  <div
                    className={classNames(
                      "has-text-weight-medium",
                      styles.title
                    )}
                  >
                    {experience.title}
                  </div>
                  <div
                    className={classNames(
                      "has-text-right is-italic",
                      styles.dates
                    )}
                  >
                    {experience.dates}
                  </div>
                  <div className={styles.duties}>
                    <ul>
                      {experience.duties.map((duty, index) => (
                        <li key={`duty-${index}`}>
                          <div
                            className={classNames("is-flex mb-2", styles.duty)}
                          >
                            <span
                              className={classNames(
                                "icon mr-1 is-small has-text-dark",
                                styles.icon
                              )}
                            >
                              <Done />
                            </span>
                            <span>{duty}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Grid>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </Fade>
  );
}
