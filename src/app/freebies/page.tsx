import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";

import { Badge } from "@/ui/badge";
import { Fade } from "@/ui/fade/fade";
import { Section } from "@/ui/section/section";
import freebies from "./freebies.json";

export const metadata = {
  title: "Blog - Richard Torres",
  metadataBase: new URL("https://www.richardtorres.co"),
  openGraph: {
    title: "Richard Torres — Collection of Freebies",
    url: "https://www.richardtorres.co/freebies",
    locale: "en-US",
    type: "website",
    description:
      "I'm Richard Torres, software engineer located in Boston, MA. This is a collection of free resources I created. Learn more or contact me.",
    images: {
      url: "/images/richard-torres.jpg"
    }
  }
};

export default function Freebies() {
  return (
    <Fade duration={1500}>
      <Section>
        <div className="container">
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-bold mb-6 text-center">
              <span className="text-red-500">Fre</span>ebies
            </h1>
            <p className="mb-4">The best things in life are free!</p>
            <p>
              Here is a collection of free resources created by me you can use
              in your next project.
            </p>
          </div>
          <ul>
            {freebies.map((freebie) => (
              <li key={freebie.name}>
                <a href={freebie.url} rel="noreferrer" target="_blank">
                  <Card className="hover:bg-card-foreground/5">
                    <CardHeader>
                      <CardTitle>{freebie.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {freebie.tags.map((tag, index) => (
                          <Badge key={`${tag}-${index}`}>{tag}</Badge>
                        ))}
                      </div>
                      <p>{freebie.description}</p>
                    </CardContent>
                  </Card>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </Fade>
  );
}
