import data from "@/data/skills.json";
import styles from "./skills.module.scss";
import classNames from "classnames";
import { Section } from "@/ui/section/section";

export function Skills() {
  return (
    <Section className="has-background-white-ter" id="skills">
      <div className="container">
        <h2 className="title has-text-centered">
          <span className="has-text-danger">Ski</span>lls
        </h2>
        <div className="columns">
          {data.map((skill) => (
            <div className="column" key={skill.name}>
              <div className="card">
                <div className="card-content">
                  <h3 className="title is-uppercase is-6 has-text-centered has-text-weight-normal">
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
                      <div className={classNames("mr-4", styles.categoryName)}>
                        {item.name}
                      </div>
                      <div className="tags are-medium">
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
    </Section>
  );
}
