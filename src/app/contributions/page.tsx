import { Card, CardHeader } from "@/ui/card";

import { Fade } from "@/ui/fade/fade";
import SVG from "@/ui/svg/svg";
import { Section } from "@/ui/section/section";
import contributions from "./contributions.json";

export const metadata = {
  title: "Blog - Richard Torres",
  metadataBase: new URL("https://www.richardtorres.co"),
  openGraph: {
    title: "Richard Torres — Open Source Contributions",
    url: "https://www.richardtorres.co/contributions",
    locale: "en-US",
    type: "website",
    description:
      "I'm Richard Torres, software engineer located in Boston, MA. This is a list of open source projects to which I've contributed. Learn more or contact me.",
    images: {
      url: "/images/richard-torres.jpg"
    }
  }
};

export default function Contributions() {
  return (
    <Fade duration={1500}>
      <Section>
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-semibold mb-6">
              <span className="text-red-500">Op</span>en{" "}
              <span className="text-red-500">So</span>urce{" "}
              <span className="text-red-500">Con</span>tributions
            </h2>
            <p className="max-w-screen-md m-auto mb-4">
              I&rsquo;m deeply passionate about open source. I&rsquo;m an active
              member of several user groups such as{" "}
              <a
                className="text-blue-500 underline hover:no-underline"
                href="https://www.meetup.com/bostongamedev/"
                rel="noreferrer"
                target="_blank"
              >
                Boston Godot Developers Group
              </a>{" "}
              and{" "}
              <a
                className="text-blue-500 underline hover:no-underline"
                href="https://www.meetup.com/reactjs-boston/"
                rel="noreferrer"
                target="_blank"
              >
                ReactJS Boston
              </a>{" "}
              that meet monthly to discuss project development and host
              community events. I also listen to podcasts about open source such
              as{" "}
              <a
                className="text-blue-500 underline hover:no-underline"
                href="https://hackaday.com/tag/floss-weekly/"
                rel="noreferrer"
                target="_blank"
              >
                FLOSS Weekly
              </a>{" "}
              and{" "}
              <a
                className="text-blue-500 underline hover:no-underline"
                href="https://twit.tv/shows/untitled-linux-show"
                rel="noreferrer"
                target="_blank"
              >
                Untitled Linux Show
              </a>
              .
            </p>
            <p>
              Below is a list of open source projects to which I&rsquo;ve
              contributed.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {contributions.map((contribution) => (
              <div key={contribution.projectName}>
                <Card>
                  <CardHeader>
                    <div className="flex gap-4 items-center">
                      <SVG
                        className="w-8 h-8 flex justify-center object-cover"
                        src={contribution.image}
                      />
                      <div>
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href={contribution.url}
                          className="text-blue-500 hover:underline"
                        >
                          {contribution.projectName}
                        </a>
                        {typeof contribution.version === "string" ? (
                          <div>Contributed Version: {contribution.version}</div>
                        ) : (
                          <div>
                            Contributed Versions:{" "}
                            {contribution.version.join(", ")}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </Fade>
  );
}
