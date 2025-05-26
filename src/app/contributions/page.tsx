import { Fade } from "@/ui/fade/fade";
import { Section } from "@/ui/section/section";
import { Contributions } from "./contributions";

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
      url: "/images/richard-torres.jpg",
    },
  },
};

export default function ContributionPage() {
  return (
    <Fade duration={1500}>
      <Section className="print:break-inside-auto">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-6 text-4xl font-semibold">
            <span className="text-red-500">Op</span>en{" "}
            <span className="text-red-500">So</span>urce{" "}
            <span className="text-red-500">Con</span>tributions
          </h2>
          <p className="mb-4">
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
            that meet monthly to discuss project development and host community
            events. I also listen to podcasts about open source such as{" "}
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
        <Contributions />
      </Section>
    </Fade>
  );
}
