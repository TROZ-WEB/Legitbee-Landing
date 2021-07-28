// Dependencies

// Components
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import Banner from '../../components/Banner';
import StyledLink from '../../components/StyledLink';

// Render
export default function ReportDeath() {
	return (
		<>
			{/* <Navbar /> */}
			<Container>
				<Banner>
					<h1 className="mb-2">Signaler un décès</h1>
				</Banner>

				<p className="mb-4">
					Vous souhaitez signaler le décès d&apos;un proche qui possédait un compte
					Legitbee afin de déclencher la libération de ses informations : veuillez nous
					contacter à l&apos;adresse{' '}
					<StyledLink href="mailto:succession@legitbee.com">
						succession@legitbee.com
					</StyledLink>{' '}
					afin que nous puissions vous assister dans les plus brefs délais.
				</p>
			</Container>
			{/* <Footer /> */}
		</>
	);
}
