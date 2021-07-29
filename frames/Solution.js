// Dependencies
import styled from 'styled-components';
import TextLoop from 'react-text-loop';

// Components
import Image from '../components/Image';
import Container from '../components/Container';
import ImageBox from '../components/ImageBox';

// Style
const Line1Container = styled.div`
	position: absolute;
	top: 14rem;
	right: -5rem;
`;

const Line2Container = styled.div`
	position: absolute;
	top: 48rem;
	left: 5rem;
`;

const Line3Container = styled.div`
	position: absolute;
	top: 80rem;
	right: 17rem;
`;

const Line4Container = styled.div`
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
			<Title>
				Préservez <br />
				<TextLoop mask="true" interval="1500">
					<h1>
						<mark>
							ce(ux) que vous <br className="d-md-none" />
							avez de plus cher(s)
						</mark>
					</h1>
					<h1>
						<mark>
							vos <br className="d-md-none" />
							héritiers
						</mark>
					</h1>
					<h1>
						<mark>
							vos <br className="d-md-none" />
							souvenirs
						</mark>
					</h1>
					<h1>
						<mark>
							votre héritage <br className="d-md-none" />
							numérique
						</mark>
					</h1>
					<h1>
						<mark>
							votre patrimoine <br className="d-md-none" />
							personnel
						</mark>
					</h1>
					<h1>
						<mark>
							votre patrimoine <br className="d-md-none" />
							professionnel
						</mark>
					</h1>
				</TextLoop>
			</Title>
			<ImageBox
				className="mt-5"
				src="/assets/images/succession-simplifiee.jpg"
				alt="succession simplifiée"
				width="500"
				height="488"
				title={
					<>
						L&apos;organisation de votre succession est <mark>simplifiée</mark> et{' '}
						<mark>personnalisée</mark>
					</>
				}
				caption="Désormais, tous les documents nécessaires à la gestion de votre succession : vos informations administratives et documents importants, vos consignes et instructions sont organisés, sécurisés et transmis rapidement à vos proches."
			/>
			<Line1Container className="d-none d-xl-block">
				<Image
					src="/assets/images/line-1.svg"
					alt="decoration"
					width="493.634"
					height="527.209"
				/>
			</Line1Container>
			<ImageBox
				inversed="true"
				src="/assets/images/heritage-numerique.jpg"
				alt="héritage numérique"
				width="500"
				height="442"
				title={
					<>
						Tout votre patrimoine intègre enfin votre succession, même votre
						<mark> héritage numérique</mark>
					</>
				}
				caption="Vos actifs sous toutes leurs formes (titres et placements, immobilier, collections, cryptomonnaies, neobanques, jeux et paris, trading) sont intégrés à la succession : tout est documenté, rien n'est oublié."
			/>
			<Line2Container className="d-none d-xl-block">
				<Image
					src="/assets/images/line-2.svg"
					alt="decoration"
					width="874.952"
					height="603.448"
				/>
			</Line2Container>
			<ImageBox
				src="/assets/images/demarches-administratives.jpg"
				alt="démarches administratives"
				width="500"
				height="495"
				title={
					<>
						Finies les <mark>démarches administratives</mark> interminables qui
						attendent vos héritiers
					</>
				}
				caption="La gestion d'une succession est longue et complexe. Avec Legitbee, vous épargnez à votre proches des recherches et démarches éprouvantes."
			/>

			<Line3Container className="d-none d-xl-block">
				<Image
					src="/assets/images/line-3.svg"
					alt="decoration"
					width="563.329"
					height="367.126"
				/>
			</Line3Container>
			<ImageBox
				inversed="true"
				src="/assets/images/souvenirs-transmis.jpg"
				alt="Messages, souvenirs et souhaits transmis"
				width="500"
				height="432"
				title={
					<>
						Vos <mark>messages</mark>, <mark>souvenirs</mark> et <mark>souhaits</mark>{' '}
						sont transmis à vos bénéficiaires
					</>
				}
				caption="Vos proches veulent conserver votre souvenir et celui de votre famille. Transmettez-leur tout ce que vous souhaitez leur confier : photos, vidéos, correspondances, textes, histoires, généalogie… Vous pouvez également préciser vos souhaits quant au devenir de vos comptes en ligne."
			/>
			<Line4Container className="d-none d-xl-block">
				<Image
					src="/assets/images/line-4.svg"
					alt="decoration"
					width="1470.438"
					height="748.791"
				/>
			</Line4Container>
		</Container>
	);
}
