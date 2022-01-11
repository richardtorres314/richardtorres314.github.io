import styles from './contact.module.css';
import { Container } from 'components/container/container';
import { Email, GitHub, Twitter } from 'components/icons';
import { Section } from 'components/section/section';
import { SectionHeading } from 'components/section-heading/section-heading';

export default function Contact() {
  return (
    <Section className={styles.contactWrapper} id="contact">
      <Container className={styles.contactContainer}>
        <SectionHeading align="center">
          <span>Con</span>tact Me
        </SectionHeading>
        <p>
          Let's work together! Contact me and I'll get back to you shortly 😊
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
