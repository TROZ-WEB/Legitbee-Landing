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
`;

const StyledArrowLink = styled(StyledLink)`
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	bottom: 1.75rem;
	z-index: 150;
`;

// Render
export default function Pricing() {
	return (
		<Container>
			<Title>
				Nos <mark>offres</mark>
			</Title>
			<StyledRow>
				<StyledCol>
					<PriceBox
						monthPrice="3€/mois"
						yearPrice="ou 30€/an"
						title="Numérique"
						caption="Transmettez l'intégralité de votre patrimoine numérique ainsi que vos souvenirs et données personnelles."
					/>
				</StyledCol>
				<StyledCol>
					<PriceBox
						monthPrice="6€/mois"
						yearPrice="ou 60€/an"
						title="Sérénité"
						caption="Transmettez l'intégralité de votre patrimoine numérique et simplifiez les démarches de vos héritiers."
					/>
				</StyledCol>
				<StyledCol>
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
