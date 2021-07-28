// Dependencies
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';
import Image from 'next/image';

// Components
import Container from '../components/Container';
import SimpleBox from '../components/SimpleBox';

// Style
const IconContainer = styled.div`
	margin-right: 1rem;

	@media (max-width: ${(props) => props.theme.sm}) {
		transform: scale(0.8);
	}
`;

const ImageContainer = styled.div`
	height: 26rem;

	@media (max-width: ${(props) => props.theme.md}) {
		margin-left: 11%;
		height: auto;
		max-width: 90%;
		max-height: 26rem;
	}
`;

const StyledTitle = styled.h1`
	text-align: center;
	margin: 0rem 0rem 5rem 0rem;
	background-color: white;

	@media (max-width: ${(props) => props.theme.sm}) {
		margin: 4rem 0rem 4rem 0rem;
	}
`;

// Render
export default function Engagements() {
	return (
		<Container>
			<StyledTitle>
				Legitbee <mark>s&apos;engage</mark>
			</StyledTitle>
			<Row>
				<Col xs={12} lg={5} className="text-center">
					<ImageContainer className="mb-2 mb-lg-0">
						<Image
							src="/assets/images/engagements.jpg"
							alt="engagements"
							width="700"
							height="579"
						/>
					</ImageContainer>
				</Col>
				<Col>
					<Row>
						<Col xs={12} md={6}>
							<SimpleBox
								title={
									<>
										<IconContainer>
											<Image
												src="/assets/images/accompagnement.svg"
												alt="Accompagnement"
												width="41.234"
												height="50.309"
											/>
										</IconContainer>
										Accompagnement
									</>
								}
								caption="Nous vous guidons dans l’organisation de votre transmission pour préserver votre héritage et vos héritiers."
							/>
						</Col>
						<Col xs={12} md={6}>
							<SimpleBox
								title={
									<>
										<IconContainer>
											<Image
												src="/assets/images/securite.svg"
												alt="Sécurité"
												width="39"
												height="47.012"
											/>
										</IconContainer>
										Sécurité
									</>
								}
								caption="Nous sommes audités par le Bureau Veritas et labellisés par le Conseil Supérieur du Notariat."
							/>
						</Col>
						<Col xs={12} md={6}>
							<SimpleBox
								title={
									<>
										<IconContainer>
											<Image
												src="/assets/images/protection.svg"
												alt="Protection"
												width="42"
												height="42"
											/>
										</IconContainer>
										Protection
									</>
								}
								caption="Nous respectons votre vie privée et nous interdisons toute commercialisation de vos données personnelles."
							/>
						</Col>
						<Col xs={12} md={6}>
							<SimpleBox
								title={
									<>
										<IconContainer>
											<Image
												src="/assets/images/conformite.svg"
												alt="Conformité"
												width="42"
												height="38.407"
											/>
										</IconContainer>
										Conformité
									</>
								}
								caption="Nous sommes conformes au règlement général sur la protection des données et au droit des successions."
							/>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
}
