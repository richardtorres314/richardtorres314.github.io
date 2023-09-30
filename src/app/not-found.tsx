import { Section } from "@/ui/section/section";

export const metadata = {
  title: "Richard Torres - Not Found",
};

export default function NotFound() {
  return (
    <Section>
      <div className="container m-auto is-max-desktop">
        <h1 className="title has-text-centered">Page Not Found</h1>
        <div className="content">
          <p className="block">
            The page you are looking for no longer exists or you arrived here in
            error. If you believe this is a mistake,{" "}
            <a href="mailto:richardtorres314@gmail.com">reach out</a>!
            Otherwise,{" "}
            <a href="/" className="link">
              head to the starship
            </a>
            .
          </p>
        </div>
      </div>
    </Section>
  );
}
