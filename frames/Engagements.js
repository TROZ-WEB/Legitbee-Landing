// Dependencies
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';
import Image from 'next/image';

// Components
import Container from '../components/Container';
import SimpleBox from '../components/SimpleBox';
import Accompagnement from '../public/assets/images/accompagnement.svg';
import Securite from '../public/assets/images/securite.svg';
import Protection from '../public/assets/images/protection.svg';
import Conformite from '../public/assets/images/conformite.svg';
import EngagementsImage from '../public/assets/images/engagements.jpg';

// Style
const Icon = styled(Image)`
	margin-right: 1rem;

	@media (max-width: ${(props) => props.theme.sm}) {
		transform: scale(0.8);
	}
`;

const StyledImage = styled(Image)`
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
					<StyledImage
						src={EngagementsImage}
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
										<Icon src={Accompagnement} alt="Accompagnement" />{' '}
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
										<Icon src={Securite} alt="Sécurité" /> Sécurité
									</>
								}
								caption="Nous sommes audités par le Bureau Veritas et labellisés par le Conseil Supérieur du Notariat."
							/>
						</Col>
						<Col xs={12} md={6}>
							<SimpleBox
								title={
									<>
										<Icon src={Protection} alt="Protection" /> Protection
									</>
								}
								caption="Nous respectons votre vie privée et nous interdisons toute commercialisation de vos données personnelles."
							/>
						</Col>
						<Col xs={12} md={6}>
							<SimpleBox
								title={
									<>
										<Icon src={Conformite} alt="Conformité" /> Conformité
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
