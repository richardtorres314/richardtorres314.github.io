import { Fade } from "@/ui/fade/fade";
import { Section } from "@/ui/section/section";

export default function About() {
  return (
    <Fade duration={1500}>
      <Section id="about">
        <div className="md:container mx-auto md:max-w-screen-lg">
          <div className="flex flex-wrap lg:flex-nowrap gap-12 print:flex-nowrap">
            <div>
              <h2 className="text-4xl font-semibold mb-6">
                <span className="text-red-500">Abo</span>ut Me
              </h2>
              <p className="mb-4">
                Born in the bayous of Brooklyn, NY 🚕, I’ve devoted myself to
                being a life-long learner. A former STEM teacher, I’m a firm
                believer in the power of education 🧠.
              </p>
              <p className="mb-4">
                Working <strong>across the stack</strong> sparks joy ✨, though
                I’ve been known to be well versed in the dark arts of{" "}
                <strong>front-end engineering</strong> 💅.
              </p>
              <p>
                When I’m not at my keyboard, I enjoy cooking 🍳, running 🏃, and
                listening to podcasts 🎧.
              </p>
            </div>
            <div className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Illustration of person thinking alongside laptop"
                src="/images/code-thinking.svg"
              />
            </div>
          </div>
        </div>
      </Section>
    </Fade>
  );
}
