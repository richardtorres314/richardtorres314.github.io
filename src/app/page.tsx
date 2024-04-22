import About from "@/components/about";
import { Contact } from "@/components/contact/contact";
import { Experience } from "@/components/experience/experience";
import { Skills } from "@/components/skills/skills";

export const metadata = {
  title: "Richard Torres",
  metadataBase: new URL("https://www.richardtorres.co"),
  openGraph: {
    title: "Richard Torres — Personal Homepage",
    url: "https://www.richardtorres.co/",
    locale: "en-US",
    type: "website",
    description:
      "I'm Richard Torres, software engineer located in Boston, MA. Learn more or contact me.",
    images: {
      url: "/images/richard-torres.jpg",
    },
  },
};

export default function Home() {
  return (
    <>
      <About />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}
