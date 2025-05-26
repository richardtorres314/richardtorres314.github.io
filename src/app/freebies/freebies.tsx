import { ArrowTopRightOnSquare } from "@/icons/arrow-top-right-on-square";
import { Badge } from "@/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import freebies from "./freebies.json";

export function Freebies() {
  return (
    <ul>
      {freebies.map((freebie) => (
        <li key={freebie.name}>
          <a href={freebie.url} rel="noreferrer" target="_blank">
            <Card className="relative overflow-hidden hover:bg-card-foreground/5">
              <CardHeader>
                <CardTitle>{freebie.name}</CardTitle>
                <div className="items-top absolute top-0 right-0 flex h-16 w-20 justify-end bg-linear-to-tr from-transparent from-50% to-accent-foreground to-50%">
                  <span className="p-2">
                    <ArrowTopRightOnSquare className="size-6 stroke-card" />
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p>{freebie.description}</p>
              </CardContent>
              <CardFooter>
                <div className="mb-4 flex flex-wrap gap-2">
                  {freebie.tags.map((tag) => (
                    <Badge key={`${freebie.name}-${tag}`}>{tag}</Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          </a>
        </li>
      ))}
    </ul>
  );
}
