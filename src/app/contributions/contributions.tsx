import { Card, CardContent, CardFooter, CardHeader } from "@/ui/card";

import { Badge } from "@/ui/badge";
import contributions from "./contributions.json";

export function Contributions() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center max-w-screen-lg m-auto">
      {contributions.map((contribution) => (
        <Card
          key={contribution.projectName}
          className="border-none shadow-md overflow-hidden flex flex-col"
        >
          <CardHeader className="items-center relative bg-gradient-to-tr from-cyan-600 to-cyan-200 dark:from-gray-900 dark:to-gray-600 aspect-auto justify-center">
            <div className="w-24 h-24 flex justify-center object-cover">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-16 h-16"
                alt={contribution.projectName}
                src={contribution.image}
              />
            </div>
            {contribution.projectType === "script" ||
            contribution.version[0] === "Pending" ? (
              <Badge className="absolute bottom-4 left-6">
                {contribution.version}
              </Badge>
            ) : typeof contribution.version === "string" ? (
              <Badge className="absolute bottom-4 left-6">
                v{contribution.version}
              </Badge>
            ) : (
              <div className="absolute bottom-4 left-6 flex gap-2">
                {contribution.version.map((version) => (
                  <Badge key={version}>v{version}</Badge>
                ))}
              </div>
            )}
          </CardHeader>
          <CardContent className="pt-6 grow">
            <a
              rel="noreferrer"
              target="_blank"
              href={contribution.url}
              className="text-blue-500 hover:underline"
            >
              {contribution.projectName}
            </a>
            <div>{contribution.description}</div>
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
