import About from "@/components/about/about";
import { Contact } from "@/components/contact/contact";
import { Experience } from "@/components/experience/experience";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { Skills } from "@/components/skills/skills";
import { Contributions } from "@/components/contributions/contributions";

export const metadata = {
  title: "Richard Torres",
  openGraph: {
    title: "Richard Torres — Personal Homepage",
    url: "https://richardtorres.github.io/",
    locale: "en-US",
    type: "website",
    description:
      "I'm Richard Torres, software engineer located in Boston, MA. Learn more or contact me.",
    image: "https://richardtorres314.github.io/images/richard-torres.jpg",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎯</text></svg>",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Experience />
      <Contributions />
      <Contact />
      <Footer />
    </>
  );
}
