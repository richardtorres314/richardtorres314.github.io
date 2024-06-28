import { Done } from "@/icons/done";
import { Fade } from "@/ui/fade/fade";
import { Grid } from "@/ui/grid/grid";
import { Section } from "@/ui/section/section";
import classNames from "classnames";
import experiences from "./experience.json";
import styles from "./experience.module.scss";

export const metadata = {
  title: "Blog - Richard Torres",
  metadataBase: new URL("https://www.richardtorres.co"),
  openGraph: {
    title: "Richard Torres — Professional Experience",
    url: "https://www.richardtorres.co/experience",
    locale: "en-US",
    type: "website",
    description:
      "I'm Richard Torres, software engineer located in Boston, MA. This is my professional experience. Learn more or contact me.",
    images: {
      url: "/images/richard-torres.jpg",
    },
  },
};

export default function Experience() {
  return (
    <Fade duration={1500}>
      <Section className="print:break-inside-auto">
        <div className="xl:container xl:max-w-screen-lg">
          <div className="mb-16 text-center">
            <h2 className="text-4xl mb-6 font-semibold">
              <span className="text-red-500">Exp</span>erience
            </h2>
            <p>
              My professional experience as a Software Engineer, the teams
              I&apos;ve worked on, and the tools I&apos;ve built.
            </p>
          </div>
          <ul>
            {experiences.map((experience, index) => (
              <li
                key={`experience-${index}`}
                className="mb-4 print:break-inside-avoid"
              >
                <Grid layout="experience">
                  <figure
                    className={classNames(
                      "image flex items-center w-8 h-8",
                      styles.image
                    )}
                  >
                    <img
                      alt={`${experience.company} Logo`}
                      src={experience.logo}
                    />
                  </figure>
                  <div className={classNames("font-semibold", styles.company)}>
                    {experience.company}
                  </div>
                  <div
                    className={classNames(
                      "text-red-500 text-right",
                      styles.location
                    )}
                  >
                    {experience.location}
                  </div>
                  <div className={classNames("font-medium", styles.title)}>
                    {experience.title}
                  </div>
                  <div
                    className={classNames("text-right italic", styles.dates)}
                  >
                    {experience.dates}
                  </div>
                  <div className={styles.duties}>
                    <ul>
                      {experience.duties.map((duty, index) => (
                        <li key={`duty-${index}`}>
                          <div className={classNames("flex mb-2", styles.duty)}>
                            <div className="mr-1 w-4 h-4 min-w-4 min-h-4 dark:fill-white">
                              <Done />
                            </div>
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
