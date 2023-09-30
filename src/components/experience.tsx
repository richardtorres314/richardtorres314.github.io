import experiences from "@/data/experience.json";
import { Grid } from "@/ui/grid/grid";
import { Done } from "@/icons/done";
import { Section } from "@/ui/section/section";

export function Experience() {
  return (
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
                  className="image is-flex is-align-items-center is-32x32"
                  style={{ gridArea: "logo" }}
                >
                  <img
                    alt={`${experience.company} Logo`}
                    src={experience.logo}
                  />
                </figure>
                <div
                  className="has-text-weight-semibold"
                  style={{ gridArea: "company" }}
                >
                  {experience.company}
                </div>
                <div
                  className="has-text-danger has-text-right"
                  style={{ gridArea: "location" }}
                >
                  {experience.location}
                </div>
                <div
                  className="has-text-weight-medium"
                  style={{ gridArea: "title" }}
                >
                  {experience.title}
                </div>
                <div
                  className="has-text-right is-italic"
                  style={{ gridArea: "dates", fontSize: "0.9rem" }}
                >
                  {experience.dates}
                </div>
                <div style={{ gridArea: "duties" }}>
                  <ul>
                    {experience.duties.map((duty, index) => (
                      <li key={`duty-${index}`}>
                        <div
                          className="is-flex mb-2"
                          style={{ alignItems: "first baseline" }}
                        >
                          <span
                            className="icon mr-1 is-small has-text-dark"
                            style={{ minWidth: "1rem" }}
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
  );
}
