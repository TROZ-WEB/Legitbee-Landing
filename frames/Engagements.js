// Dependencies
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';

// Components
import Container from '../components/Container';
import SimpleBox from '../components/SimpleBox';

// Style
const Icon = styled.img`
	margin-right: 1rem;
`;

const Image = styled.img`
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
					<Image
						src="/assets/images/engagements.jpg"
						alt="engagements"
						className="mb-2 mb-lg-0"
					/>
				</Col>
				<Col>
					<Row>
						<Col xs={12} md={6}>
							<SimpleBox
								title={
									<>
										<Icon
											src="/assets/images/accompagnement.svg"
											alt="Accompagnement"
										/>{' '}
										Accompagnement
									</>
								}
								caption="Vous vous sentez perdu dans l’organisation de votre succession ? Pas de panique, nous vous guidons  pas à pas."
							/>
						</Col>
						<Col xs={12} md={6}>
							<SimpleBox
								title={
									<>
										<Icon
											src="/assets/images/simplicite.svg"
											alt="Simplicité"
										/>{' '}
										Simplicité
									</>
								}
								caption="Dites adieu aux démarches administratives laborieuses. Legitbee est là pour vous simplifier la vie."
							/>
						</Col>
						<Col xs={12} md={6}>
							<SimpleBox
								title={
									<>
										<Icon
											src="/assets/images/protection.svg"
											alt="Protection"
										/>{' '}
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
										<Icon
											src="/assets/images/conformite.svg"
											alt="Conformité"
										/>{' '}
										Conformité
									</>
								}
								caption="Nous sommes conformes au règlement général sur la protection des données et au droit successoral."
							/>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
}
