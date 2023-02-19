import styles from "./contact.module.css";
import { Container } from "@/components/container/container";
import { Section } from "@/components/section/section";
import { SectionHeading } from "@/components/section-heading/section-heading";
import { GitHub } from "@/components/icons/github";
import { Twitter } from "@/components/icons/twitter";
import { Email } from "@/components/icons/email";

export function Contact() {
  return (
    <Section className={styles.contactWrapper} id="contact" withPageBreak>
      <Container className={styles.contactContainer}>
        <SectionHeading align="center">
          <span>Con</span>tact Me
        </SectionHeading>
        <p>
          Let’s work together! Contact me and I’ll get back to you shortly 😊
        </p>
        <div className={styles.contactList}>
          <a
            href="https://www.github.com/richardtorres314"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub />
          </a>
          <a
            href="https://www.twitter.com/rtorr05"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter />
          </a>
          <a href="mailto:richardtorres314@gmail.com">
            <Email />
          </a>
        </div>
      </Container>
    </Section>
  );
}
