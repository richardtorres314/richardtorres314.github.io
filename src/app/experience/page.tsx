import { Done } from "@/icons/done";
import { Fade } from "@/ui/fade/fade";
import { Section } from "@/ui/section/section";
import experiences from "./experience.json";

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
          <div className="m-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-6 text-4xl font-semibold">
              <span className="text-red-500">Exp</span>erience
            </h2>
            <p>
              My professional experience as a Software Engineer, the teams
              I&apos;ve worked on, and the tools I&apos;ve built.
            </p>
          </div>
          <ul className="flex flex-col gap-2">
            {experiences.map((experience) => (
              <li
                key={experience.company}
                className="mb-4 print:break-inside-avoid"
              >
                <div className="grid grid-cols-[auto_1fr] gap-2 md:grid-cols-[auto_1fr_1fr] print:grid-cols-[auto_1fr_1fr]">
                  <figure className="row-span-2 size-8">
                    <img
                      alt={`${experience.company} Logo`}
                      src={experience.logo}
                    />
                  </figure>
                  <div className="font-semibold md:col-2">
                    {experience.company}
                  </div>
                  <div className="col-2 row-2 font-medium">
                    {experience.title}
                  </div>
                  <div className="col-2 row-3 text-red-500 md:col-3 md:row-auto md:text-right print:col-3 print:row-auto print:text-right">
                    {experience.location}
                  </div>
                  <div className="col-2 row-4 text-sm italic md:col-3 md:row-2 md:text-right print:col-3 print:row-auto print:text-right">
                    {experience.dates}
                  </div>
                  <div className="col-span-2 col-start-2">
                    <ul>
                      {experience.duties.map((duty) => (
                        <li key={`${experience.title}-${duty}`}>
                          <div className="mb-2 flex items-baseline">
                            <div className="mr-1 h-4 min-h-4 w-4 min-w-4 dark:fill-white">
                              <Done />
                            </div>
                            <span>{duty}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </Fade>
  );
}
