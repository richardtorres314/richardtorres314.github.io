import { Fade } from "@/ui/fade/fade";
import { Section } from "@/ui/section/section";

export default function About() {
  return (
    <Fade duration={1500}>
      <Section id="about">
        <div className="mx-auto md:container md:max-w-(--breakpoint-lg)">
          <div className="flex flex-wrap gap-12 lg:flex-nowrap print:flex-nowrap">
            <div>
              <h2 className="mb-6 text-4xl font-semibold">
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
              {/** biome-ignore lint/performance/noImgElement: Avoid vender dependent solutions */}
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
