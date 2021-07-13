// Dependencies
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';

// Components
import IconBox from '../components/IconBox';
import Container from '../components/Container';
import Title from '../components/Title';

// Style
const StyledCol = styled(Col)`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const TextContainer = styled.div`
	text-align: center;
	margin: 2rem 0rem;
`;

// Render
export default function Problem() {
	return (
		<Container>
			<Title>
				Vous pensez que votre succession sera <br />
				<mark>simple</mark> et <mark>complète</mark> ?
			</Title>
			<Row>
				<StyledCol xs={12} md={4}>
					<IconBox
						src="/assets/images/money.svg"
						alt="Vos actifs diversifiés"
						title="Vos actifs diversifiés"
						caption="Êtes-vous certains que l'intégralité de vos actifs intégreront votre succession ?"
					/>
				</StyledCol>
				<StyledCol xs={12} md={4}>
					<IconBox
						src="/assets/images/memories.svg"
						alt="Votre héritage numérique"
						title="Votre héritage numérique"
						caption="Avez-vous pensé à votre héritage numérique ? Qu'adviendront vos données et documents personnels ?"
					/>
				</StyledCol>
				<StyledCol xs={12} md={4}>
					<IconBox
						src="/assets/images/infos.svg"
						alt="Vos informations personnelles"
						title="Vos informations personnelles"
						caption="Vos proches auront-ils accès à toutes les informations nécessaires à la gestion de votre succession ?"
					/>
				</StyledCol>
			</Row>
			<TextContainer>
				<p>
					Avec Legitbee, vous préparez votre transmission complète, facilement et en toute
					confidentialité.
				</p>
			</TextContainer>
		</Container>
	);
}
