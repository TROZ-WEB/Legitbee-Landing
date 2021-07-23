// Dependencies
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';

// Components
import Container from '../components/Container';
import Button from '../components/Button';

// Style
const Background = styled.div`
	background-color: ${(props) => props.theme.lightPrimary};
	min-height: 30rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const LeftCol = styled(Col)`
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media (max-width: ${(props) => props.theme.sm}) {
		text-align: center;
		align-items: center;
	}
`;

const RightCol = styled(Col)`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
`;

const Image = styled.img`
	width: 80%;
`;

const Video = styled.video`
	width: 80%;
`;

// Render
export default function CallToAction() {
	return (
		<Background>
			<Container>
				<Row>
					<LeftCol xs={{ size: 12, order: 2 }} md={{ size: 6, order: 1 }}>
						<h1>Accédez au service</h1>
						<p className="my-2">
							Au cours de votre vie, vous avez constitué un patrimoine traditionnel et
							numérique précieux. Garantissez sa transmission dès aujourd&apos;hui
							avec Legitbee.
						</p>
						<Button to="/pricing" className="big">
							Testez gratuitement
						</Button>
					</LeftCol>
					<RightCol xs={{ size: 12, order: 1 }} md={{ size: 6, order: 2 }}>
						<Video autoPlay muted loop>
							<source src="/assets/images/screen.mp4" type="video/mp4" />
						</Video>
					</RightCol>
				</Row>
			</Container>
		</Background>
	);
}
