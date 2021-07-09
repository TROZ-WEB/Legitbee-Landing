// Dependencies
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';
import { Link } from 'next/link';

// Components
import Container from '../components/Container';
import StyledLink from '../components/StyledLink';
import IconLink from '../components/IconLink';

// SVG
import Linkedin from '../components/Svg/Linkedin';
import Facebook from '../components/Svg/Facebook';
import Instagram from '../components/Svg/Instagram';
import Twitter from '../components/Svg/Twitter';
import Email from '../components/Svg/Email';
import Location from '../components/Svg/Location';

// Style
const Logo = styled.img`
	width: 9rem;
`;

const FooterContainer = styled(Row)`
	padding: 4rem 0rem 5rem 0rem;
`;

const SocialContainer = styled.div`
	display: flex;
`;

// Render
export default function Footer() {
	return (
		<Container>
			<FooterContainer>
				<Col>
					<Logo src="/assets/images/logo.svg" alt="logo" />
					<SocialContainer>
						<IconLink href="https://www.linkedin.com/company/legitbee/about/">
							<Linkedin />
						</IconLink>
						<IconLink href="https://www.facebook.com/LegitbeeFrance">
							<Facebook />
						</IconLink>
						<IconLink href="https://www.instagram.com/legitbee_/?hl=fr">
							<Instagram />
						</IconLink>
						<IconLink href="https://twitter.com/Legitbee_Fr">
							<Twitter />
						</IconLink>
					</SocialContainer>
				</Col>
				<Col>
					<h2>Contact</h2>
					<IconLink href="mailto:contact@legitbee.com" caption="contact@legitbee.com">
						<Email />
					</IconLink>
					<IconLink
						href="https://www.google.com/maps/place/165+Avenue+de+Bretagne,+59000+Lille/@50.634077,3.0206193,17z/data=!4m13!1m7!3m6!1s0x47c2d5fb4c33e7f7:0xdfa7ca5a36aea19c!2s165+Avenue+de+Bretagne,+59000+Lille!3b1!8m2!3d50.6340123!4d3.0207782!3m4!1s0x47c2d5fb4c33e7f7:0xdfa7ca5a36aea19c!8m2!3d50.6340123!4d3.0207782"
						caption={
							<>
								165 avenue de Bretagne
								<br />
								59800 LILLE
								<br />
								France
							</>
						}
					>
						<Location />
					</IconLink>
				</Col>
				<Col>
					<h2>Liens</h2>
					<StyledLink href="/mentions-legales" className="footer">
						Mentions légales
					</StyledLink>
					<StyledLink href="/assets/images/privacy-policy.pdf" className="footer">
						Politique de confidentialité
					</StyledLink>
					<StyledLink href="/assets/images/CGS.pdf" className="footer">
						Conditions générales de service
					</StyledLink>
					<StyledLink href="https://legitbee-ficonum.web.app/" className="footer">
						Pour les notaires
					</StyledLink>
					<StyledLink href="/signaler-deces" className="footer">
						Signaler un décès
					</StyledLink>
				</Col>
			</FooterContainer>
		</Container>
	);
}
