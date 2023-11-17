import { GitHub } from "@/icons/github";
import { Email } from "@/icons/email";
import { Section } from "@/ui/section/section";
import { LinkedIn } from "@/icons/linkedin";
import styles from "./contact.module.scss";
import classNames from "classnames";

export function Contact() {
  return (
    <Section
      className={classNames("has-text-light", styles.section)}
      id="contact"
    >
      <div className="container">
        <h2 className="title has-text-centered has-text-light">
          <span className="has-text-danger">Con</span>tact Me
        </h2>
        <p className="block has-text-centered">
          Let’s work together! Contact me and I’ll get back to you shortly 😊
        </p>
        <div className="columns is-centered">
          <div className="column is-1 is-centered has-text-centered">
            <a
              href="https://www.github.com/richardtorres314"
              target="_blank"
              rel="noreferrer"
              className="icon is-large has-text-light"
            >
              <GitHub />
            </a>
          </div>
          <div className="column is-1 is-centered has-text-centered">
            <a
              href="https://www.linkedin.com/in/richardtorres314"
              target="_blank"
              rel="noreferrer"
              className="icon is-large has-text-light"
            >
              <LinkedIn />
            </a>
          </div>
          <div className="column is-1 is-centered has-text-centered">
            <a
              href="mailto:richardtorres314@gmail.com"
              className="icon is-large has-text-light"
            >
              <Email />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}