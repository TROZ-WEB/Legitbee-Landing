// Dependencies
import Head from 'next/head';

// Components
import Navbar from '../components/Navbar';
import Hero from '../frames/Hero';
import Labels from '../frames/Labels';
import Partners from '../frames/Partners';
import Problem from '../frames/Problem';
import Solution from '../frames/Solution';
import Keypoints from '../frames/Keypoints';
import How from '../frames/How';
import Engagements from '../frames/Engagements';
import Pricing from '../frames/Pricing';
import FAQ from '../frames/FAQ';
import CallToAction from '../frames/CallToAction';
import Footer from '../components/Footer';

// Functions
// window.onbeforeunload = function () {
// 	window.scrollTo(0, 0);
// };

// Render
export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<Labels />
			<Problem />
			<Solution />
			<Keypoints />
			<How />
			<Engagements />
			<Pricing />
			<FAQ />
			<Partners />
			<CallToAction />
			<Footer />
		</>
	);
}
