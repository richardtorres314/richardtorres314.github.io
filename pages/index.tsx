import About from "components/about/about";
import Contact from "components/contact/contact";
import Experience from "components/experience/experience";
import Footer from "components/footer/footer";
import Header from "components/header/header";
import Skills from "components/skills/skills";
import Button from "components/button/button";
import { useEffect, useState } from "react";

const Home = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShowButton(window.scrollY > 50);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setShowButton(false);
      });
    };
  }, []);

  return (
    <>
      <Header />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
      {showButton && <Button />}
    </>
  );
};

export default Home;
