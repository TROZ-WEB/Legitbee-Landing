// Dependencies
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';
import { boxShadow } from '../../Theme';

// Components
import Navbar from '../../components/Navbar';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import Image from '../components/Image';

// Style
const ImageContainer = styled.div`
	width: 15rem;
	height: 15rem;
	border-radius: 2rem;
	${boxShadow}
	overflow: hidden;
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
			<Navbar active="about" />
			<Container>
				<Banner>
					<h1 className="mb-2">À propos</h1>
					<p className="mb-2">
						Nous en prenons conscience lorsque nous le traversons, la succession est un
						moment compliqué et difficile. Legitbee se donne pour ambition de simplifier
						la transmission ainsi que les démarches des héritiers après décès. Notre
						souhait est de permettre à ceux qui le souhaitent de transmettre toutes les
						facettes qui constituent leur héritage et leur mémoire. Utiliser Legitbee
						c’est aussi préserver ses proches et leur laisser le temps de se recentrer
						sur leur deuil plutôt que sur des démarches administratives laborieuses.
					</p>
					<p className="mb-2">
						Une telle mission est possible grâce à toutes les personnes dont s’entoure
						Legitbee. Chacune contribue à l’amélioration et au développement de notre
						service. Les experts et spécialistes de la succession, les notaires mais
						aussi les personnes de tout horizon et de tout patrimoine qui nous
						permettent d’avancer un peu plus chaque jour.
					</p>
				</Banner>

				<Row>
					<StyledCol xs={12} md={6}>
						<ImageContainer>
							<Image
								src="/assets/images/about/guillaume.jpg"
								alt="Guillaume Parisot"
								width="300"
								height="300"
							/>
						</ImageContainer>
						<h2 className="my-1">Guillaume Parisot</h2>
						<p>CEO et co-fondateur</p>
					</StyledCol>
					<StyledCol xs={12} md={6}>
						<ImageContainer>
							<Image
								src="/assets/images/about/pierre.jpg"
								alt="Pierre Delannoy"
								width="300"
								height="300"
							/>
						</ImageContainer>
						<h2 className="my-1">Pierre Delannoy</h2>
						<p>CTO et co-fondateur</p>
					</StyledCol>
				</Row>
			</Container>
			<Footer />
		</>
	);
}
