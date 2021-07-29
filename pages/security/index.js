// Dependencies
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';

// Components
import Image from '../../components/Image';
import Navbar from '../../components/Navbar';
import Title from '../../components/Title';
import IconBox from '../../components/IconBox';
import TextBlock from './components/TextBlock';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Container from '../../components/Container';

// Style
const StyledCol = styled(Col)`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const CSNContainer = styled.div`
	width: 8rem;
	margin-right: 2rem;
`;

const BVContainer = styled.div`
	width: 5rem;
`;

// Data
import Content from '../../public/assets/data/content.json';

// Render
export default function Security({ ...props }) {
	return (
		<>
			<Navbar active="security" />
			<Container>
				<Banner>
					<h1 className="mb-2">Sécurité</h1>
					<p className="mb-2">
						La sécurité et la protection de vos données sont au coeur de nos priorités.
						Nous concevons une solution sécurisée respectant les normes européennes en
						vigueur.
					</p>
					<p className="my-2">
						Legitbee est une solution labellisée par le Conseil Supérieur du Notariat et
						auditée par le Bureau Veritas.
					</p>
					<div className="d-flex align-items-center">
						<CSNContainer>
							<Image
								src="/assets/images/CSN.png"
								alt="Conseil Supérieur du Notariat"
								width="294"
								height="171"
							/>
						</CSNContainer>
						<BVContainer>
							<Image
								src="/assets/images/BV.png"
								alt="Bureau Veritas"
								width="150"
								height="186"
							/>
						</BVContainer>
					</div>
				</Banner>

				<Row>
					<StyledCol xs={12} md={4}>
						<IconBox
							src="/assets/images/encryption.svg"
							alt="Chiffrement"
							width="166.505"
							height="192.263"
							title="Chiffrement"
							caption="Nous mettons en oeuvre les algorithmes de chiffrement les plus robustes du marché et sommes fréquemment audités par des spécialistes de la sécurité."
						/>
					</StyledCol>
					<StyledCol xs={12} md={4}>
						<IconBox
							src="/assets/images/conformity.svg"
							alt="Conformité"
							width="166.505"
							height="192.263"
							title="Conformité"
							caption="Nous respectons les procédures successorales et la charte pour un développement éthique du numérique notarial."
						/>
					</StyledCol>
					<StyledCol xs={12} md={4}>
						<IconBox
							src="/assets/images/rgpd.svg"
							alt="Respect RGPD"
							width="166.505"
							height="192.263"
							title="Respect RGPD"
							caption="Le respect des données utilisateurs est au coeur de notre projet. Vous restez souverains de vos données à tout moment."
						/>
					</StyledCol>
				</Row>

				{Content.security.content?.map((item, i) => (
					<TextBlock
						key={i}
						title={item.title}
						caption={item.caption}
						list={item.list}
						link={item.link}
					/>
				))}
			</Container>
			<Footer />
		</>
	);
}
