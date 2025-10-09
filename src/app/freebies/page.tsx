import type { Metadata } from "next";
import { Fade } from "@/ui/fade/fade";
import { Section } from "@/ui/section/section";
import { Freebies } from "./freebies";

export const metadata: Metadata = {
  title: "Freebies - Richard Torres",
  metadataBase: new URL("https://www.richardtorres.co"),
  openGraph: {
    title: "Richard Torres — Collection of Freebies",
    url: "https://www.richardtorres.co/freebies",
    locale: "en-US",
    type: "website",
    description:
      "I'm Richard Torres, software engineer located in Boston, MA. This is a collection of free resources I created. Learn more or contact me.",
    images: {
      url: "/images/richard-torres.jpg",
    },
  },
};

export default function FreebiesPage() {
  return (
    <Fade duration={1500}>
      <Section className="print:break-inside-auto">
        <div className="xl:container">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h1 className="mb-6 text-center text-4xl font-bold">
              <span className="text-red-500">Fre</span>ebies
            </h1>
            <p className="mb-4">The best things in life are free!</p>
            <p>
              Here is a collection of free resources created by me you can use
              in your next project.
            </p>
          </div>
          <Freebies />
        </div>
      </Section>
    </Fade>
  );
}
