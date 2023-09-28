export default function About() {
  return (
    <section className="section" id="about">
      <div className="container columns is-max-desktop is-centered m-auto">
        <div className="column is-half">
          <h2 className="title">
            <span className="has-text-danger">Abo</span>ut Me
          </h2>
          <p className="block">
            Born in the bayous of Brooklyn, NY 🚕, I’ve devoted myself to being
            a life-long learner. A former STEM teacher, I’m a firm believer in
            the power of education 🧠.
          </p>
          <p className="block">
            Working <strong>across the stack</strong> sparks joy ✨, though I’ve
            been known to be well versed in the dark arts of{" "}
            <strong>front-end engineering</strong> 💅.
          </p>
          <p className="block">
            When I’m not at my keyboard, I enjoy cooking 🍳, running 🏃, and
            listening to podcasts 🎧.
          </p>
        </div>
        <div className="column is-half">
          <figure className="image">
            <img
              alt="Illustration of person thinking alongside laptop"
              src="images/undraw_code_thinking_1jeh.svg"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}