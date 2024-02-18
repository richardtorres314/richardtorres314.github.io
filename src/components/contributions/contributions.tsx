"use client";

import contributions from "@/data/contributions.json";
import Link from "next/link";
import { Grid } from "@/ui/grid/grid";
import { Section } from "@/ui/section/section";
import styles from "./contributions.module.scss";
import classNames from "classnames";
import { Fade } from "react-awesome-reveal";
import { ReactSVG } from "react-svg";

export function Contributions(): JSX.Element {
  return (
    <Fade duration={1500}>
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
                  <div className={classNames("box", styles.box)}>
                    <Grid layout="contributions">
                      <figure
                        className={classNames(
                          "image is-32x32 is-flex is-justify-content-center",
                          styles.logo
                        )}
                      >
                        <ReactSVG src={contribution.image} />
                      </figure>
                      <div className={styles.company}>
                        <Link
                          rel="noreferrer"
                          target="_blank"
                          href={contribution.url}
                        >
                          {contribution.projectName}
                        </Link>
                      </div>
                      <div className={styles.version}>
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
    </Fade>
  );
}
