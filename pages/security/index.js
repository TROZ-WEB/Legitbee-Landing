// Dependencies
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';

// Components
import Navbar from '../../components/Navbar';
import Title from '../../components/Title';
import IconBox from '../../components/IconBox';
import List from '../../components/List';
import Footer from '../../components/Footer';
import StyledLink from '../../components/StyledLink';

// Style
const Image = styled.img`
	max-width: 90%;
	border-radius: 2rem;
`;

const StyledCol = styled(Col)`
	display: flex;
	align-items: center;
	justify-content: center;
`;

// Data
import Content from '../public/assets/data/content.json';
import TextBlock from './components/TextBlock';

// Render
export default function Functionalities() {
	return (
		<>
			<Navbar />
			<Title>Sécurité</Title>
			<p>
				La sécurité et la protection de vos données sont au coeur de nos priorités. Nous
				concevons une solution sécurisée respectant les normes européennes en vigueur.
			</p>

			<Row>
				<StyledCol xs={12} md={4}>
					<IconBox
						src="/assets/images/money.svg"
						alt="Chiffrement"
						title="Chiffrement"
						caption="Nous mettons en oeuvre les algorithmes de chiffrement les plus robustes du marché et sommes fréquemment audités par des spécialistes de la sécurité."
					/>
				</StyledCol>
				<StyledCol xs={12} md={4}>
					<IconBox
						src="/assets/images/memories.svg"
						alt="Conformité"
						title="Conformité"
						caption="Nous respectons les procédures successorales et la charte pour un développement éthique du numérique notarial."
					/>
				</StyledCol>
				<StyledCol xs={12} md={4}>
					<IconBox
						src="/assets/images/infos.svg"
						alt="Respect RGPD"
						title="Respect RGPD"
						caption="Le respect des données utilisateurs est au coeur de notre projet. Vous restez souverains de vos données à tout moment."
					/>
				</StyledCol>
			</Row>

			{Content.security.map((item, i) => (
				<TextBlock
					key={i}
					title={item.title}
					caption={item.caption}
					list={item.list}
					link={item.link}
				/>
			))}

			<Footer />
		</>
	);
}
