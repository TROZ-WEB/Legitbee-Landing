// Dependencies

// Components
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import Banner from '../../components/Banner';
import StyledLink from '../../components/StyledLink';

// Render
export default function LegalNotices() {
	return (
		<>
			<Navbar />
			<Container>
				<Banner>
					<h1 className="mb-2">Mentions légales</h1>
				</Banner>

				<p>
					Le site{' '}
					<StyledLink href="https://www.legitbee.com">www.legitbee.com</StyledLink> est
					édité par Legitbee, une société par actions simplifiées au capital de 60.000
					euros, ayant son siège 165 Avenue de Bretagne à Lille (59000), immatriculée au
					Registre du commerce et des sociétés de Lille Métropole sous le numéro 890 006
					299.
				</p>
				<p className="mt-3">
					Directeur de la publication : Monsieur Guillaume Parisot Le site{' '}
					<StyledLink href="https://www.legitbee.com">www.legitbee.com</StyledLink> est
					hébergé par la société OVH dont le siège social est situé 2 rue Kellermann -
					59100 Roubaix.
				</p>
				<p className="mt-3 mb-4">
					Vous pouvez contacter Legitbee par email à l’adresse :{' '}
					<StyledLink href="mailto:contact@legitbee.com">contact@legitbee.com</StyledLink>
				</p>
			</Container>
			<Footer />
		</>
	);
}
