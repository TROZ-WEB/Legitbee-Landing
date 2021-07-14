// Dependencies
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';
import { boxShadow } from '../../Theme';

// Components
import Navbar from '../../components/Navbar';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';

// Style
const Image = styled.img`
	width: 15rem;
	border-radius: 2rem;
	${boxShadow}
`;

const StyledCol = styled(Col)`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 2rem 0rem;
`;

// Render
export default function About() {
	return (
		<>
			<Navbar />
			<Container>
				<Banner>
					<h1 className="mb-2">Tarifs</h1>
					<p className="mb-2">
						Testez Legitbee pendant 1 mois, c&apos;est gratuit et sans engagement.
					</p>
				</Banner>
			</Container>
			<Footer />
		</>
	);
}
