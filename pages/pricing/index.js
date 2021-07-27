// Dependencies
import { useMediaQuery } from 'react-responsive';

// Components
import Navbar from '../../components/Navbar';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import TablePhone from './components/phone/TablePhone';
import Table from './components/pc/Table';

// Style

// Render
export default function Pricing() {
	var isMobile = useMediaQuery({ query: '(max-width: 36rem)' });
	return (
		<>
			<Navbar active="pricing" />
			<Container>
				{isMobile ? (
					<>
						<Banner>
							<h1 className="mb-2">Tarifs</h1>
							<p className="mb-2">
								Testez Legitbee pendant 1 mois, c&apos;est gratuit et sans
								engagement.
							</p>
						</Banner>
						<TablePhone />
					</>
				) : (
					<Table />
				)}
			</Container>
			<Footer />
		</>
	);
}
