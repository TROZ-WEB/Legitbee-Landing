// Dependencies
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';
import Image from 'next/image';

// Components
import Navbar from '../../components/Navbar';
import Title from '../../components/Title';
import IconBox from '../../components/IconBox';
import TextBlock from './components/TextBlock';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import Encryption from '../../public/assets/images/encryption.svg';
import Conformity from '../../public/assets/images/conformity.svg';
import RGPD from '../../public/assets/images/rgpd.svg';
import CSNImage from '../../public/assets/images/CSN.png';
import BVImage from '../../public/assets/images/BV.png';

// Style
const StyledCol = styled(Col)`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const CSNContainer = styled.div`
	max-height: 4rem;
	margin-right: 2rem;
`;

const BVContainer = styled.div`
	max-height: 5rem;
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
					<CSNContainer>
						<Image
							src={CSNImage}
							alt="Conseil Supérieur du Notariat"
							width="294"
							height="171"
						/>
					</CSNContainer>
					<BVContainer>
						<Image src={BVImage} alt="Bureau Veritas" width="150" height="186" />
					</BVContainer>
				</Banner>

				<Row>
					<StyledCol xs={12} md={4}>
						<IconBox
							src={Encryption}
							alt="Chiffrement"
							width="166.505"
							height="192.263"
							title="Chiffrement"
							caption="Nous mettons en oeuvre les algorithmes de chiffrement les plus robustes du marché et sommes fréquemment audités par des spécialistes de la sécurité."
						/>
					</StyledCol>
					<StyledCol xs={12} md={4}>
						<IconBox
							src={Conformity}
							alt="Conformité"
							width="166.505"
							height="192.263"
							title="Conformité"
							caption="Nous respectons les procédures successorales et la charte pour un développement éthique du numérique notarial."
						/>
					</StyledCol>
					<StyledCol xs={12} md={4}>
						<IconBox
							src={RGPD}
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
