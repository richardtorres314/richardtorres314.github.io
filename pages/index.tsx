import About from '../components/about';
import Contact from '../components/contact';
import Experience from '../components/experience';
import Footer from '../components/footer';
import Header from '../components/header';
import Skills from '../components/skills';
import { Fragment } from 'react';

export default function Home() {
	return (
		<Fragment>
			<Header />
			<About />
			<Skills />
			<Experience />
			<Contact />
			<Footer />
		</Fragment>
	);
}
