"use client";

import { Card, CardHeader } from "@/ui/card";

import { Fade } from "@/ui/fade/fade";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import { Section } from "@/ui/section/section";
import contributions from "./contributions.json";

export function Contributions() {
  return (
    <Fade duration={1500}>
      <Section id="contributions">
        <div className="md:container max-w-screen-lg">
          <h2 className="text-4xl font-semibold mb-6 text-center">
            <span className="text-red-500">O</span>pen{" "}
            <span className="text-red-500">S</span>ource{" "}
            <span className="text-red-500">Con</span>tributions
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {contributions.map((contribution) => (
              <Card key={contribution.projectName}>
                <CardHeader>
                  <div className="flex gap-4 items-center">
                    <ReactSVG
                      className="w-8 h-8 flex justify-center object-cover"
                      src={contribution.image}
                    />
                    <div>
                      <Link
                        rel="noreferrer"
                        target="_blank"
                        href={contribution.url}
                        className="text-blue-500 hover:underline"
                      >
                        {contribution.projectName}
                      </Link>
                      <div>Contributed Version: {contribution.version}</div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </Fade>
  );
}
