// Dependencies
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';

// Components
import Container from '../components/Container';
import List from '../components/List';
import Button from '../components/Button';

// Style
const Image = styled.img`
	width: 100%;
	max-width: 35rem;
`;

const StyledRow = styled(Row)`
	margin-top: 3rem;
`;

const LeftCol = styled(Col)`
	min-height: 70vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (max-width: ${(props) => props.theme.md}) {
		text-align: center;
	}
`;

const RightCol = styled(Col)`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const TextContainer = styled.div`
	max-width: 30rem;
`;

// Render
export default function Hero() {
	return (
		<Container>
			<StyledRow>
				<LeftCol
					xs={{ size: 12, order: 2 }}
					md={{ size: 7, order: 1 }}
					lg={{ size: 6, order: 1 }}
				>
					<TextContainer>
						<h1 className="mb-2">
							Rien ne se perd <br />
							<mark>tout se transmet</mark>
						</h1>
						<List
							items={[
								"L'ensemble de vos données patrimoniales",
								'Votre héritage numérique et vos souvenirs',
								'Les informations indispensables à vos héritiers',
							]}
						/>
						<p className="my-2">
							Tout est organisé, sécurisé et transmit le moment venu aux bénéficiaires
							de votre choix.
						</p>
						<Button to="https://app.legitbee.com/auth/login" className="big">
							Préparer ma succession
						</Button>
					</TextContainer>
				</LeftCol>
				<RightCol
					xs={{ size: 12, order: 1 }}
					md={{ size: 5, order: 2 }}
					lg={{ size: 6, order: 2 }}
				>
					<Image src="/assets/images/hero.jpg" alt="hero" />
				</RightCol>
			</StyledRow>
		</Container>
	);
}
