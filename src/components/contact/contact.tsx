import { Email } from "@/icons/email";
import { Fade } from "@/ui/fade/fade";
import { GitHub } from "@/icons/github";
import { LinkedIn } from "@/icons/linkedin";
import { Section } from "@/ui/section/section";

export function Contact() {
  return (
    <Fade duration={1500}>
      <Section id="contact">
        <div className="md:container">
          <h2 className="text-4xl font-semibold mb-6 text-center">
            <span className="text-red-500">Con</span>tact Me
          </h2>
          <p className="text-center mb-6">
            Let’s work together! Contact me and I’ll get back to you shortly 😊
          </p>
          <div className="flex align-center justify-center gap-8">
            <a
              href="https://www.github.com/richardtorres314"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 text-foreground/80 hover:text-foreground/60"
            >
              <GitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/richardtorres314"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 text-foreground/80 hover:text-foreground/60"
            >
              <LinkedIn />
            </a>
            <a
              href="mailto:richardtorres314@gmail.com"
              className="w-12 h-12 text-foreground/80 hover:text-foreground/60"
            >
              <Email />
            </a>
          </div>
        </div>
      </Section>
    </Fade>
  );
}
