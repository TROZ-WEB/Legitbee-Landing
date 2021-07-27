// Dependencies
import styled from 'styled-components';
import TextLoop from 'react-text-loop';
import Image from 'next/image';

// Components
import Container from '../components/Container';
import ImageBox from '../components/ImageBox';
import Line1Img from '../public/assets/images/line-1.svg';
import Line2Img from '../public/assets/images/line-2.svg';
import Line3Img from '../public/assets/images/line-3.svg';
import Line4Img from '../public/assets/images/line-4.svg';
import SuccessionSimplifiee from '../public/assets/images/succession-simplifiee.jpg';
import HeritageNumerique from '../public/assets/images/heritage-numerique.jpg';
import DemarchesAdministratives from '../public/assets/images/demarches-administratives.jpg';
import SouvenirsTransmis from '../public/assets/images/souvenirs-transmis.jpg';
// Style
const Line1 = styled(Image)`
	position: absolute;
	top: 14rem;
	right: -5rem;
`;

const Line2 = styled(Image)`
	position: absolute;
	top: 48rem;
	left: 5rem;
`;

const Line3 = styled(Image)`
	position: absolute;
	top: 80rem;
	right: 17rem;
`;

const Line4 = styled(Image)`
	position: absolute;
	top: 110rem;
	right: -8rem;
`;

const Title = styled.h1`
	margin: 6rem 0rem 5rem 0rem;
	text-align: center;
`;

// Render
export default function Solution() {
	return (
		<Container>
			<Title className="d-none d-md-block">
				Préservez <br />
				<TextLoop mask="true" interval="1500">
					<h1>
						<mark>ce(ux) que vous avez de plus cher(s)</mark>
					</h1>
					<h1>
						<mark>vos héritiers</mark>
					</h1>
					<h1>
						<mark>vos souvenirs</mark>
					</h1>
					<h1>
						<mark>votre héritage numérique</mark>
					</h1>
					<h1>
						<mark>votre patrimoine personnel</mark>
					</h1>
					<h1>
						<mark>votre patrimoine professionnel</mark>
					</h1>
				</TextLoop>
			</Title>
			<Title className="d-block d-md-none">
				Préservez <mark>votre patrimoine traditionnel</mark>
			</Title>
			<ImageBox
				className="mt-5"
				src={SuccessionSimplifiee}
				alt="succession simplifiée"
				title={
					<>
						L&apos;organisation de votre succession est <mark>simplifiée</mark> et{' '}
						<mark>personnalisée</mark>
					</>
				}
				caption="Désormais, tous les documents nécessaires à la gestion de votre succession : vos informations administratives et documents importants, vos consignes et instructions sont organisés, sécurisés et transmis rapidement à vos proches."
			/>
			<Line1 src={Line1Img} className="d-none d-xl-block" />
			<ImageBox
				inversed="true"
				src={HeritageNumerique}
				alt="héritage numérique"
				title={
					<>
						Tout votre patrimoine intègre enfin votre succession, même votre
						<mark> héritage numérique</mark>
					</>
				}
				caption="Vos actifs sous toutes leurs formes (titres et placements, immobilier, collections, cryptomonnaies, neobanques, jeux et paris, trading) sont intégrés à la succession : tout est documenté, rien n'est oublié."
			/>
			<Line2 src={Line2Img} className="d-none d-xl-block" />
			<ImageBox
				src={DemarchesAdministratives}
				alt="démarches administratives"
				title={
					<>
						Finies les <mark>démarches administratives</mark> interminables qui
						attendent vos héritiers
					</>
				}
				caption="La gestion d'une succession est longue et complexe. Avec Legitbee, vous épargnez à votre proches des recherches et démarches éprouvantes."
			/>
			<Line3 src={Line3Img} className="d-none d-xl-block" />
			<ImageBox
				inversed="true"
				src={SouvenirsTransmis}
				alt="Messages, souvenirs et souhaits transmis"
				title={
					<>
						Vos <mark>messages</mark>, <mark>souvenirs</mark> et <mark>souhaits</mark>{' '}
						sont transmis à vos bénéficiaires
					</>
				}
				caption="Vos proches veulent conserver votre souvenir et celui de votre famille. Transmettez-leur tout ce que vous souhaitez leur confier : photos, vidéos, correspondances, textes, histoires, généalogie… Vous pouvez également préciser vos souhaits quant au devenir de vos comptes en ligne."
			/>
			<Line4 src={Line4Img} className="d-none d-xl-block" />
		</Container>
	);
}
