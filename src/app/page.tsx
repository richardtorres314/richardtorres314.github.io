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
      url: "/images/richard-torres.jpg"
    }
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎯</text></svg>"
  }
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
