import contributions from "@/data/contributions.json";
import Link from "next/link";
import { Grid } from "@/ui/grid/grid";
import { Section } from "@/ui/section/section";

export function Contributions() {
  return (
    <Section id="contributions">
      <div className="container">
        <h2 className="title has-text-centered">
          <span className="has-text-danger">O</span>pen{" "}
          <span className="has-text-danger">S</span>ource{" "}
          <span className="has-text-danger">Con</span>tributions
        </h2>
        <div className="container is-max-desktop">
          <div className="columns is-multiline is-centered">
            {contributions.map((contribution) => (
              <div className="column is-6" key={contribution.projectName}>
                <div className="box">
                  <Grid layout="contributions">
                    <figure
                      style={{ gridArea: "logo" }}
                      className="image is-32x32"
                    >
                      <img
                        alt={contribution.projectName}
                        src={contribution.image}
                      />
                    </figure>
                    <div style={{ gridArea: "company" }}>
                      <Link
                        rel="noreferrer"
                        target="_blank"
                        href={contribution.url}
                      >
                        {contribution.projectName}
                      </Link>
                    </div>
                    <div style={{ gridArea: "version" }}>
                      Contributed Version: {contribution.version}
                    </div>
                  </Grid>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
