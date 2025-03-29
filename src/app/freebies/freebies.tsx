import { Badge } from "@/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";
import freebies from "./freebies.json";

export function Freebies() {
  return (
    <ul>
      {freebies.map((freebie) => (
        <li key={freebie.name}>
          <a href={freebie.url} rel="noreferrer" target="_blank">
            <Card className="hover:bg-card-foreground/5">
              <CardHeader>
                <CardTitle>{freebie.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex flex-wrap gap-2">
                  {freebie.tags.map((tag) => (
                    <Badge key={`${freebie.name}-${tag}`}>{tag}</Badge>
                  ))}
                </div>
                <p>{freebie.description}</p>
              </CardContent>
            </Card>
          </a>
        </li>
      ))}
    </ul>
  );
}
