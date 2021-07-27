// Dependencies
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';
import Image from 'next/image';

// Components
import Container from '../components/Container';
import List from '../components/List';
import Button from '../components/Button';
import HeroImage from '../public/assets/images/hero.jpg';

// Style
const StyledImage = styled(Image)`
	width: 100%;
	max-width: 32rem;
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
		display: block;
		margin-bottom: 4rem;
		min-height: auto;
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
					<StyledImage src={HeroImage} alt="hero" />
				</RightCol>
			</StyledRow>
		</Container>
	);
}
