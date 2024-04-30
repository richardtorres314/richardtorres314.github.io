import { Fade } from "@/ui/fade/fade";
import { links } from "./links";

export function Footer() {
  return (
    <footer className="text-light pb-12 px-6 mt-12 print:break-inside-avoid">
      <Fade duration={1500}>
        <div className="flex md:container md:max-w-screen-lg">
          <div className="grow">
            <div>
              <div className="font-light text-2xl">
                Richard <span className="font-bold">Torres</span>
              </div>
              <div className="text-md">Software Engineer</div>
            </div>
          </div>
          <div className="md:mr-32 print:mr-32">
            <h3 className="text-2xl mb-4 font-semibold">Contact</h3>
            <ul className="flex flex-col gap-2">
              {links.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-foreground/80 hover:text-foreground/60 hover:underline"
                  >
                    <span className="block w-6 h-6">{link.icon()}</span>{" "}
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center pt-12">Made in Boston</div>
      </Fade>
    </footer>
  );
}
