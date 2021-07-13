// Dependencies
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';

// Components
import Navbar from '../../components/Navbar';
import Title from '../../components/Title';
import List from '../../components/List';
import Footer from '../../components/Footer';

// Style
const Image = styled.img`
	max-width: 90%;
	border-radius: 2rem;
`;

// Render
export default function Functionalities() {
	return (
		<>
			<Navbar />
			<Title>
				Une solution complète <mark>au service de votre succession</mark>
			</Title>
			<p>
				Nous vous permettons de préparer au mieux votre succession et de transmettre tout ce
				que vous souhaitez confier à vos héritiers. Vous préservez ainsi l’intégralité de
				votre patrimoine et de vos souvenirs et vous leur permettez de se recentrer sur leur
				deuil en allégeant considérablement les démarches qui les attendent.
			</p>

			<Row>
				<Col xs={12} md={6}>
					<Image
						src="/assets/images/espace-administratif.png"
						alt="Espace administratif"
					/>
				</Col>
				<Col xs={12} md={6}>
					<h2>
						Sécurisation et intégration complète{' '}
						<mark>de votre patrimoine à la succession</mark>
					</h2>
					<List
						items={[
							'Cartographie des biens numériques à intégrer à la succession : néo-banques, cryptomonnaies, jeux et paris en ligne, trading, crowdfunding…',
							'Recensement et documentation du patrimoine classique et professionnel',
						]}
					/>
				</Col>
			</Row>

			<Row>
				<Col xs={{ size: 12, order: 2 }} md={{ size: 6, order: 1 }}>
					<h2>
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
				</Col>
				<Col xs={{ size: 12, order: 1 }} md={{ size: 6, order: 2 }}>
					<Image src="/assets/images/destinataire.png" alt="Destinataire" />
				</Col>
			</Row>

			<Row>
				<Col xs={12} md={6}>
					<Image
						src="/assets/images/patrimoine-classique.png"
						alt="Patrimoine classique"
					/>
				</Col>
				<Col xs={12} md={6}>
					<h2>
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
				</Col>
			</Row>
			<Footer />
		</>
	);
}
