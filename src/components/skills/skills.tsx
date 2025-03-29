import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";

import { Badge } from "@/ui/badge";
import { Fade } from "@/ui/fade/fade";
import { Section } from "@/ui/section/section";
import data from "./skills.json";

export function Skills() {
  return (
    <Fade duration={1500}>
      <Section id="skills">
        <div className="md:container">
          <h2 className="mb-6 text-center text-4xl font-semibold">
            <span className="text-red-500">Ski</span>lls
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {data.map((skill) => (
              <div key={skill.name} className="grow">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-md text-center font-light uppercase">
                      {skill.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {skill.values.map((item) => (
                      <div
                        className="mb-4 items-center xl:flex"
                        key={item.name}
                      >
                        <div className="mr-4 mb-2 xl:mb-0">{item.name}</div>
                        <div className="flex gap-2">
                          {item.values.map((value) => (
                            <Badge
                              className="tag text-white"
                              key={value}
                              style={{ backgroundColor: item.color }}
                            >
                              {value}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </Fade>
  );
}
