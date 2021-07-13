// Dependencies
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';

// Components
import Container from '../components/Container';
import IconBox from '../components/IconBox';
import Title from '../components/Title';

// Style
const BlueContainer = styled(Row)`
	background-color: ${(props) => props.theme.primary};
	border-radius: 2rem;
	padding: 3rem 5rem;
	max-width: 50rem;

	@media (max-width: ${(props) => props.theme.sm}) {
		padding: 1rem;
	}
`;

const Image = styled.img`
	width: 29rem;
	position: relative;
	left: -3rem;
`;

const FlexContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

// Render
export default function Keypoints() {
	return (
		<Container>
			<Title>
				<mark>Soyez serain</mark> <br /> votre héritage est entre de bonnes mains
			</Title>
			<FlexContainer>
				<BlueContainer>
					<Col xs={12} md={6}>
						<IconBox
							noShadow="true"
							src="/assets/images/safe.svg"
							alt="Pas de mots de passe"
							title="Pas de mots de passe"
							caption="Ils ne sont pas nécessaires pour intégrer vos comptes à la succession. En savoir plus"
						/>
					</Col>
					<Col xs={12} md={6}>
						<IconBox
							noShadow="true"
							src="/assets/images/id.svg"
							alt="Pas de pièce d'identité"
							title="Pas de pièce d'identité"
							caption="Vérification de l'identité via FranceConnect, service de l'Etat."
						/>
					</Col>
					<Col xs={12} md={6}>
						<IconBox
							noShadow="true"
							src="/assets/images/secure.svg"
							alt="Données sécurisées"
							title="Données sécurisées"
							caption="Seuls les destinataires que vous avez choisis pourront accéder à vos informations."
						/>
					</Col>
					<Col xs={12} md={6}>
						<IconBox
							noShadow="true"
							src="/assets/images/fast.svg"
							alt="Déclenchement une fois le décès vérifié"
							title="Déclenchement une fois le décès vérifié"
							caption="Vos informations et documents sont transmis à vos bénéficiaires une fois le décès vérifié sur l'INSEE."
						/>
					</Col>
				</BlueContainer>
				<Image
					src="/assets/images/serenite.jpg"
					alt="soyez serains"
					className="d-none d-lg-block"
				/>
			</FlexContainer>
		</Container>
	);
}
