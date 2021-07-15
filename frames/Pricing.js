// Dependencies
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';

// Components
import Container from '../components/Container';
import PriceBox from '../components/PriceBox';
import StyledLink from '../components/StyledLink';
import Title from '../components/Title';

// Style
const StyledCol = styled(Col)`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 6rem;

	@media (max-width: ${(props) => props.theme.sm}) {
		margin-bottom: 1rem;
	}
`;

const StyledRow = styled(Row)`
	position: relative;
	z-index: 100;
`;

const Rect = styled.div`
	border: 2px solid ${(props) => props.theme.secondary};
	border-radius: 2rem;
	width: 100%;
	height: 12rem;
	position: absolute;
	bottom: 0rem;

	@media (max-width: ${(props) => props.theme.sm}) {
		position: relative;
		height: auto;
		border: 0px;
		bottom: auto;
	}
`;

const StyledArrowLink = styled(StyledLink)`
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	bottom: 1.75rem;
	z-index: 150;

	@media (max-width: ${(props) => props.theme.sm}) {
		position: relative;
		bottom: auto;
		margin-top: 1rem;
	}
`;

// Render
export default function Pricing() {
	return (
		<Container>
			<Title>
				Nos <mark>offres</mark>
			</Title>
			<StyledRow>
				{/* <StyledCol xs={12} md={4}>
					<PriceBox
						monthPrice="Gratuit"
						title="Numérique"
						caption="Transmettez l'intégralité de votre patrimoine numérique ainsi que vos souvenirs et données personnelles."
					/>
				</StyledCol> */}
				<StyledCol xs={12} md={6}>
					<PriceBox
						monthPrice="6€/mois"
						yearPrice="ou 60€/an"
						title="Sérénité"
						caption="Transmettez l'intégralité de votre patrimoine numérique et simplifiez les démarches de vos héritiers."
					/>
				</StyledCol>
				<StyledCol xs={12} md={6}>
					<PriceBox
						monthPrice="9€/mois"
						yearPrice="ou 90€/an"
						title="Premium"
						caption="Anticipez et assurez la transmission de votre patrimoine diversifié. "
					/>
				</StyledCol>
			</StyledRow>
			<Rect>
				<StyledArrowLink href="/pricing" className="arrow">
					Voir le détail
				</StyledArrowLink>
			</Rect>
		</Container>
	);
}
