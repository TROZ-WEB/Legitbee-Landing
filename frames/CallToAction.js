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
	margin-top: 6rem;
`;

const LeftCol = styled(Col)`
	display: flex;
	flex-direction: column;
	justify-content: center;
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
	position: absolute;
	width: 66%;
	top: 6.5%;
	left: 17%;

	@media (max-width: ${(props) => props.theme.md}) {
		width: 63.5%;
		top: 22.5%;
		left: 18.3%;
	}
`;

// Render
export default function CallToAction() {
	return (
		<Background>
			<Container>
				<Row>
					<LeftCol>
						<h1>Accédez au service</h1>
						<p className="my-2">
							Au cours de votre vie, vous avez accumulé un patrimoine traditionnel et
							numérique précieux. Ne le perdez plus, transmettez-le facilement grâce à
							Legitbee.
						</p>
						<Button to="/pricing">Testez gratuitement</Button>
					</LeftCol>
					<RightCol>
						<Image src="/assets/images/screen.png" alt="screen mockup" />
						<Video autoPlay muted loop>
							<source src="/assets/images/legitbee-app.mp4" type="video/mp4" />
						</Video>
					</RightCol>
				</Row>
			</Container>
		</Background>
	);
}
