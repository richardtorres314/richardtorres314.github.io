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
        <div className="xl:container xl:max-w-(--breakpoint-lg)">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-semibold">
              <span className="text-red-500">Exp</span>erience
            </h2>
            <p>
              My professional experience as a Software Engineer, the teams
              I&apos;ve worked on, and the tools I&apos;ve built.
            </p>
          </div>
          <ul>
            {experiences.map((experience) => (
              <li
                key={experience.company}
                className="mb-4 print:break-inside-avoid"
              >
                <Grid layout="experience">
                  <figure
                    className={classNames(
                      "image flex h-8 w-8 items-center",
                      styles.image,
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
                      "text-right text-red-500",
                      styles.location,
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
                      {experience.duties.map((duty) => (
                        <li key={`${experience.title}-${duty}`}>
                          <div className={classNames("mb-2 flex", styles.duty)}>
                            <div className="mr-1 h-4 min-h-4 w-4 min-w-4 dark:fill-white">
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
