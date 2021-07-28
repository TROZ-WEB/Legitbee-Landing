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
	max-width: 32rem;
`;

const CSN = styled.img`
	max-height: 4rem;
`;

const BV = styled.img`
	max-height: 6rem;
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
							Tout est organisé, sécurisé et transmis le moment venu aux bénéficiaires
							de votre choix.
						</p>
						<Button to="https://app.legitbee.com/auth/login" className="big">
							Préparer ma succession
						</Button>

						{/* <div>
							<p className="mt-2 mb-1">
								Audité, labellisé et soutenu par le Conseil Supérieur du Notariat
							</p>
							<CSN
								src="/assets/images/CSN.png"
								alt="Conseil Supérieur du Notariat"
								className="mr-3"
							/>
							<BV src="/assets/images/BV.png" alt="Bureau Veritas" />
						</div> */}
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
