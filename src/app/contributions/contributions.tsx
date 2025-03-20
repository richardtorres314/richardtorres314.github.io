import { Card, CardContent, CardFooter, CardHeader } from "@/ui/card";

import { Badge } from "@/ui/badge";
import contributions from "./contributions.json";

export function Contributions() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center max-w-(--breakpoint-lg) m-auto">
      {contributions.map((contribution) => (
        <Card
          key={contribution.projectName}
          className="border-none shadow-md overflow-hidden flex flex-col pt-0"
        >
          <CardHeader className="items-center relative bg-blue-500 dark:bg-black/25 aspect-auto justify-center pt-6">
            <div className="size-32 flex justify-center">
              <img
                className="size-16"
                alt={contribution.projectName}
                src={contribution.image}
              />
            </div>
            {contribution.projectType === "script" ||
            contribution.version[0] === "Pending" ? (
              <Badge className="absolute bottom-6 left-6">
                {contribution.version}
              </Badge>
            ) : typeof contribution.version === "string" ? (
              <Badge className="absolute bottom-6 left-6">
                v{contribution.version}
              </Badge>
            ) : (
              <div className="absolute bottom-6 left-6 flex gap-2">
                {contribution.version.map((version) => (
                  <Badge key={version}>v{version}</Badge>
                ))}
              </div>
            )}
          </CardHeader>
          <CardContent className="grow">
            <a
              rel="noreferrer"
              target="_blank"
              href={contribution.url}
              className="text-blue-500 hover:underline text-lg block pb-2"
            >
              {contribution.projectName}
            </a>
            <p>{contribution.description}</p>
          </CardContent>
          <CardFooter className="flex-col items-start space-y-2">
            <Badge variant="secondary">{contribution.contributionType}</Badge>
            <div className="flex gap-2">
              {contribution.languages?.map((language) => (
                <Badge key={language}>{language}</Badge>
              ))}
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
