import { Badge } from "@/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/ui/card";
import contributions from "./contributions.json";

export function Contributions() {
  return (
    <div className="m-auto grid max-w-(--breakpoint-lg) justify-center gap-4 sm:grid-cols-2 md:grid-cols-3">
      {contributions.map((contribution) => (
        <Card
          key={contribution.projectName}
          className="flex flex-col overflow-hidden border-none pt-0 shadow-md"
        >
          <CardHeader className="relative aspect-auto items-center justify-center bg-blue-500 pt-6 dark:bg-black/25 print:bg-transparent dark:print:bg-transparent">
            <div className="mt-4 flex size-32 justify-center">
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
          <CardContent className="grow pt-6">
            <a
              rel="noreferrer"
              target="_blank"
              href={contribution.url}
              className="block pb-2 text-lg text-blue-500 hover:underline"
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
