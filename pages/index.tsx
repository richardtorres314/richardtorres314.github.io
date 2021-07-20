import About from 'components/about/about';
import Contact from 'components/contact/contact';
import Experience from 'components/experience/experience';
import Footer from 'components/footer/footer';
import Header from 'components/header/header';
import { Skills } from 'components/skills/skills';

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
