import styles from './about.module.css';
import { Container } from 'components/container/container';
import { Section } from 'components/section/section';
import { SectionHeading } from 'components/section-heading/section-heading';

export default function About() {
  return (
    <Section className={styles.aboutWrapper} id="about">
      <Container className={styles.aboutContainer} md>
        <div className={styles.aboutText}>
          <SectionHeading>
            <span>Abo</span>ut Me
          </SectionHeading>
          <p>
            Born in the bayous of Brooklyn, NY 🚕, I've devoted myself to being
            a life-long learner. A former STEM teacher, I'm a firm believer in
            the power of education 🧠.
          </p>
          <p>
            Working <strong>across the stack</strong> sparks joy ✨, though I've
            been known to be well versed in the dark arts of{" "}
            <strong>front-end engineering</strong> 💅.
          </p>
          <p>
            When I'm not at my keyboard, I enjoy cooking 🍳, running 🏃, and
            listening to podcasts 🎧.
          </p>
        </div>
        <div className={styles.aboutImageWrapper}>
          <img
            className={styles.aboutImage}
            alt="Illustration of person thinking alongside laptop"
            src="undraw_code_thinking_1jeh.svg"
          />
        </div>
      </Container>
    </Section>
  );
}
