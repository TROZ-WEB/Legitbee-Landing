// Dependencies
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';

// Components
import Container from '../components/Container';
import IconBox from '../components/IconBox';
import Title from '../components/Title';
import StyledLink from '../components/StyledLink';

// Style
const BlueContainer = styled(Row)`
	background-color: ${(props) => props.theme.primary};
	border-radius: 2rem;
	padding: 3rem 5rem;
	max-width: 50rem;
	margin-top: 2rem;

	@media (max-width: ${(props) => props.theme.sm}) {
		padding: 1rem;
	}
`;

const Image = styled.img`
	width: 20vw;
	max-width: 29rem;
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
				<mark>Soyez serein</mark> <br /> votre héritage est entre de bonnes mains
			</Title>
			<FlexContainer>
				<BlueContainer>
					<Col xs={12} md={6}>
						<IconBox
							noShadow="true"
							src="/assets/images/safe.svg"
							alt="Pas de mots de passe"
							title="Pas de mots de passe"
							caption={
								<>
									<p>
										Ils ne sont pas nécessaires pour intégrer vos comptes à la
										succession.
									</p>
									<StyledLink
										href="https://help.legitbee.com/fr/"
										className="arrow mt-1"
									>
										En savoir plus
									</StyledLink>
								</>
							}
						/>
					</Col>
					<Col xs={12} md={6}>
						<IconBox
							noShadow="true"
							src="/assets/images/id.svg"
							alt="Pas de pièce d'identité"
							title="Pas de pièce d'identité"
							caption={
								<>
									<p>
										Vérification de l&apos;identité via FranceConnect, service
										de l&apos;Etat.
									</p>
									<StyledLink
										href="https://franceconnect.gouv.fr/"
										className="arrow mt-1"
									>
										En savoir plus
									</StyledLink>
								</>
							}
						/>
					</Col>
					<Col xs={12} md={6}>
						<IconBox
							noShadow="true"
							src="/assets/images/secure.svg"
							alt="Données sécurisées"
							title="Données sécurisées"
							caption={
								<>
									<p>
										Seuls les destinataires que vous avez choisis pourront
										accéder à vos informations.
									</p>
									<StyledLink href="/security" className="arrow mt-1">
										En savoir plus
									</StyledLink>
								</>
							}
						/>
					</Col>
					<Col xs={12} md={6}>
						<IconBox
							noShadow="true"
							src="/assets/images/fast.svg"
							alt="Vérification des décès"
							title="Vérification des décès"
							caption={
								<>
									<p>
										Vos informations et documents sont transmis à vos
										bénéficiaires une fois le décès vérifié.
									</p>
									<StyledLink
										href="https://help.legitbee.com/fr/"
										className="arrow mt-1"
									>
										En savoir plus
									</StyledLink>
								</>
							}
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
