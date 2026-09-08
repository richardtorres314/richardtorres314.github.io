import type { Metadata } from "next";
import About from "@/components/about";
import { Skills } from "@/components/skills/skills";

export const metadata: Metadata = {
  title: "Richard Torres",
  metadataBase: new URL("https://richardtorres.co"),
  openGraph: {
    title: "Richard Torres — Personal Homepage",
    url: "https://richardtorres.co/",
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
    </>
  );
}
