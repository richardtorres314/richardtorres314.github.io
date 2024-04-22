import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";

import { Badge } from "@/ui/badge";
import { Fade } from "@/ui/fade/fade";
import { Section } from "@/ui/section/section";
import posts from "./posts.json";

export const metadata = {
  title: "Blog - Richard Torres",
  metadataBase: new URL("https://www.richardtorres.co"),
  openGraph: {
    title: "Richard Torres — Blog",
    url: "https://www.richardtorres.co/blog",
    locale: "en-US",
    type: "website",
    description:
      "I'm Richard Torres, software engineer located in Boston, MA. This is my blog. Learn more or contact me.",
    images: {
      url: "/images/richard-torres.jpg"
    }
  }
};

export default function Blog() {
  return (
    <Fade duration={1500}>
      <Section className="print:break-inside-auto">
        <div className="container">
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-semibold mb-6 text-center">
              <span className="text-red-500">Bl</span>og{" "}
              <span className="text-red-500">Po</span>sts
            </h1>
            <p>
              Here is a list of blog posts I&rsquo;ve written across the web.
              Click on a post to read!
            </p>
          </div>
          <ul>
            {posts
              .sort((a, b) => (a.date > b.date ? 1 : -1))
              .map((post) => (
                <li key={post.url} className="mb-4 print:break-inside-avoid">
                  <a href={post.url} rel="noreferrer" target="_blank">
                    <Card className="hover:bg-card-foreground/5">
                      <CardHeader>
                        <CardTitle>{post.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag, index) => (
                            <Badge key={`${tag}-${index}`}>{tag}</Badge>
                          ))}
                        </div>
                        <p className="mb-2">{post.description}</p>
                        <div className="text-sm">{post.date}</div>
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
