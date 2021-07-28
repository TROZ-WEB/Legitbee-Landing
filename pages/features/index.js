// Dependencies
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';
import { boxShadow } from '../../Theme';
import Image from 'next/image';

// Components
import Navbar from '../../components/Navbar';
import List from '../../components/List';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import Banner from '../../components/Banner';
import EspaceAdministratif from '../../public/assets/images/features/espace-administratif.png';
import Destinataire from '../../public/assets/images/features/destinataire.png';
import PatrimoineClassique from '../../public/assets/images/features/patrimoine-classique.png';

// Style
const ImageContainer = styled.div`
	max-width: 90%;
	border-radius: 2rem;
	${boxShadow};
	margin: 2rem 0rem;
`;

const StyledCol = styled(Col)`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

// Render
export default function Features() {
	return (
		<>
			<Navbar active="features" />
			<Container>
				<Banner>
					<h1 className="mb-2">
						Une solution complète <br />
						<mark>au service de votre succession</mark>
					</h1>
					<p className="mb-2">
						Nous vous permettons de préparer au mieux votre succession et de transmettre
						tout ce que vous souhaitez confier à vos héritiers. Vous préservez ainsi
						l’intégralité de votre patrimoine et de vos souvenirs et vous leur permettez
						de se recentrer sur leur deuil en allégeant considérablement les démarches
						qui les attendent.
					</p>
				</Banner>

				<Row>
					<Col xs={12} md={6}>
						<ImageContainer>
							<Image
								src={EspaceAdministratif}
								alt="Espace administratif"
								width="531"
								height="472"
							/>
						</ImageContainer>
					</Col>
					<StyledCol xs={12} md={6}>
						<h2 className="mb-2">
							Sécurisation et intégration complète{' '}
							<mark>de votre patrimoine à la succession</mark>
						</h2>
						<List
							items={[
								'Cartographie des biens numériques à intégrer à la succession : néo-banques, cryptomonnaies, jeux et paris en ligne, trading, crowdfunding…',
								'Recensement et documentation du patrimoine classique et professionnel',
							]}
						/>
					</StyledCol>
				</Row>

				<Row>
					<StyledCol xs={{ size: 12, order: 2 }} md={{ size: 6, order: 1 }}>
						<h2 className="mb-2">
							Simplification de la gestion de la succession{' '}
							<mark>et des démarches après décès</mark>
						</h2>
						<List
							items={[
								'Réunion de toutes les informations personnelles, administratives et pratiques nécessaires ou utiles aux démarches des héritiers',
								"Information confidentielle de vos bénéficiaires d'assurances vie ou prévoyance lors de votre succession",
								'Base de données consultable par le notaire en charge de votre succession des informations auxquelles vous souhaitez lui donner accès',
							]}
						/>
					</StyledCol>
					<Col xs={{ size: 12, order: 1 }} md={{ size: 6, order: 2 }}>
						<ImageContainer>
							<Image src={Destinataire} alt="Destinataire" width="531" height="472" />
						</ImageContainer>
					</Col>
				</Row>

				<Row>
					<Col xs={12} md={6}>
						<ImageContainer>
							<Image
								src={PatrimoineClassique}
								alt="Patrimoine classique"
								width="531"
								height="472"
							/>
						</ImageContainer>
					</Col>
					<StyledCol xs={12} md={6}>
						<h2 className="mb-2">
							Intégration à la succession <mark>de vos données et volontés</mark>
						</h2>
						<List
							items={[
								'Transmission de vos fichiers conservés sur les Clouds : fichiers, photos, vidéos, musiques…',
								'Coffre fort numérique posthume',
								'Enregistrement de vos volontés sur le devenir de vos comptes numériques',
								'Programmation de messages personnels',
							]}
						/>
					</StyledCol>
				</Row>
			</Container>
			<Footer />
		</>
	);
}
