import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";

import { Badge } from "@/ui/badge";
import { Fade } from "@/ui/fade/fade";
import { Section } from "@/ui/section/section";
import posts from "./posts.json";

export const metadata = {
  title: "Blog - Richard Torres",
  metadataBase: new URL("https://richardtorres.github.io/"),
  openGraph: {
    title: "Richard Torres — Personal Homepage",
    url: "https://richardtorres.github.io/",
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

export default function Blog() {
  return (
    <Fade duration={1500}>
      <Section>
        <div className="container">
          <h1 className="text-4xl font-semibold mb-6 text-center">
            Blog Posts
          </h1>
          <ul>
            {posts
              .sort((a, b) => (a.date > b.date ? 1 : -1))
              .map((post) => (
                <li key={post.url} className="mb-4">
                  <a href={post.url} rel="noreferrer" target="_blank">
                    <Card className="hover:bg-gray-100 dark:hover:bg-slate-900">
                      <CardHeader>
                        <CardTitle>{post.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag, index) => (
                            <Badge key={`${tag}-${index}`}>{tag}</Badge>
                          ))}
                        </div>
                        <div>{post.date}</div>
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
