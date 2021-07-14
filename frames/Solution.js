// Dependencies
import styled from 'styled-components';
import TextLoop from 'react-text-loop';

// Components
import Container from '../components/Container';
import ImageBox from '../components/ImageBox';

// Style
const Line1 = styled.img`
	position: absolute;
	top: 14rem;
	right: 0;
`;

const Line2 = styled.img`
	position: absolute;
	top: 42rem;
	left: 18rem;
`;

const Line3 = styled.img`
	position: absolute;
	top: 64rem;
	right: 20rem;
`;

const Line4 = styled.img`
	position: absolute;
	top: 88rem;
	right: -9rem;
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
				Préservez <br className="d-block d-lg-none" />
				<TextLoop mask="true" interval="1500">
					<h1>
						<mark>votre patrimoine traditionnel</mark>
					</h1>
					<h1>
						<mark>votre patrimoine numérique</mark>
					</h1>
					<h1>
						<mark>vos souvenirs</mark>
					</h1>
					<h1>
						<mark>vos proches</mark>
					</h1>
				</TextLoop>
			</Title>
			<Title className="d-block d-md-none">
				Préservez <mark>votre patrimoine traditionnel</mark>
			</Title>
			<ImageBox
				src="/assets/images/succession-simplifiee.jpg"
				alt="succession simplifiée"
				title={
					<>
						L&apos;organisation de votre succession est <mark>simplifiée</mark> et{' '}
						<mark>personnalisée</mark>
					</>
				}
				caption="Désormais, tous les documents nécessaires à la gestion de votre succession : vos informations administratives et documents importants, vos consignes et instructions sont organisés, sécurisés et transmis rapidement à vos proches."
			/>
			<Line1 src="/assets/images/line-1.svg" className="d-none d-xl-block" />
			<ImageBox
				inversed="true"
				src="/assets/images/heritage-numerique.jpg"
				alt="héritage numérique"
				title={
					<>
						Plus rien n&apos;échappe à votre succession pas même votre{' '}
						<mark>héritage numérique</mark>
					</>
				}
				caption="Vos actifs sous toutes leurs formes (biens numériques, patrimoine diversifié, professionnel ou international) sont intégrés facilement à la succession : rien de ce que vous avez constitué n’est laissé de côté !"
			/>
			<Line2 src="/assets/images/line-2.svg" className="d-none d-xl-block" />
			<ImageBox
				src="/assets/images/demarches-administratives.jpg"
				alt="démarches administratives"
				title={
					<>
						Finies les <mark>démarches administratives</mark> interminables qui
						attendent vos héritiers
					</>
				}
				caption="La gestion d'une succession est souvent complexe. En organisant et préparant votre succession, vous facilitez les démarches de vos proches et vous leur permettez de se recentrer sur leur deuil."
			/>
			<Line3 src="/assets/images/line-3.svg" className="d-none d-xl-block" />
			<ImageBox
				inversed="true"
				src="/assets/images/souvenirs-transmis.jpg"
				alt="Messages, souvenirs et souhaits transmis"
				title={
					<>
						Vos <mark>messages</mark>, <mark>souvenirs</mark> et <mark>souhaits</mark>{' '}
						sont transmis à vos bénéficiaires
					</>
				}
				caption="Vos proches veulent conserver votre souvenir et celui de votre famille : transmettez-leur tout ce que vous souhaitez leur confier : Photos, vidéos, correspondances, textes, histoires, généalogie… Vous pouvez également préciser vos souhaits quant au devenir de vos comptes en ligne."
			/>
			<Line4 src="/assets/images/line-4.svg" className="d-none d-xl-block" />
		</Container>
	);
}
