import { LatentThemeChecker } from "@/components/latent-theme-checker/latent-theme-checker";
import { Section } from "@/ui/section/section";

export const metadata = {
  title: "Richard Torres - Not Found",
  metadataBase: new URL("https://www.richardtorres.co"),
  openGraph: {
    title: "Richard Torres — Personal Homepage",
    url: "https://www.richardtorres.co",
    locale: "en-US",
    type: "website",
    description:
      "I'm Richard Torres, software engineer located in Boston, MA. Learn more or contact me.",
    images: {
      url: "/images/richard-torres.jpg"
    }
  }
};

export default function NotFound() {
  return (
    <LatentThemeChecker>
      <Section>
        <div className="container max-w-screen-lg">
          <h1 className="text-4xl font-semibold mb-6 text-center">
            Page Not Found
          </h1>
          <div className="content">
            <p>
              The page you are looking for no longer exists or you arrived here
              in error. If you believe this is a mistake,{" "}
              <a
                className="text-blue-500 hover:underline"
                href="mailto:richardtorres314@gmail.com"
              >
                reach out
              </a>
              ! Otherwise,{" "}
              <a href="/" className="text-blue-500 hover:underline">
                head to the starship
              </a>
              .
            </p>
          </div>
        </div>
      </Section>
    </LatentThemeChecker>
  );
}
