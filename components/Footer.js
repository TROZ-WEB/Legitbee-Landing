// Dependencies
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';

// Components
import Container from './Container';
import StyledLink from './StyledLink';
import IconLink from './IconLink';
import Image from '../components/Image';

// SVG
import Linkedin from './Svg/Linkedin';
import Facebook from './Svg/Facebook';
import Instagram from './Svg/Instagram';
import Twitter from './Svg/Twitter';
import Email from './Svg/Email';
import Location from './Svg/Location';

// Style
const ImageContainer = styled.div`
	width: 9rem;
`;

const FooterContainer = styled(Row)`
	padding: 4rem 0rem 5rem 0rem;
`;

const SocialContainer = styled.div`
	display: flex;
`;

const StyledCol = styled(Col)`
	@media (max-width: ${(props) => props.theme.sm}) {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 2rem;
	}
`;

// Render
export default function Footer() {
	return (
		<Container>
			<FooterContainer>
				<StyledCol xs={12} md={4}>
					<ImageContainer>
						<Image
							src="/assets/images/logo.svg"
							alt="logo"
							width="413.246"
							height="128.353"
						/>
					</ImageContainer>
					<SocialContainer>
						<IconLink href="https://www.linkedin.com/company/legitbee/about/" blank>
							<Linkedin />
						</IconLink>
						<IconLink href="https://www.facebook.com/LegitbeeFrance" blank>
							<Facebook />
						</IconLink>
						<IconLink href="https://www.instagram.com/legitbee_/?hl=fr" blank>
							<Instagram />
						</IconLink>
						<IconLink href="https://twitter.com/Legitbee_Fr" className="mr-0" blank>
							<Twitter />
						</IconLink>
					</SocialContainer>
				</StyledCol>
				<StyledCol xs={12} md={4}>
					<h2>Contact</h2>
					<IconLink
						href="mailto:contact@legitbee.com"
						caption="contact@legitbee.com"
						className="mr-0 md-mr-1"
						blank
					>
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
						className="mr-0 md-mr-1"
						blank
					>
						<Location />
					</IconLink>
				</StyledCol>
				<StyledCol xs={12} md={4}>
					<h2>Liens</h2>
					<StyledLink href="/legal-notices" className="footer">
						Mentions légales
					</StyledLink>
					<StyledLink href="/privacy-policy.pdf" className="footer">
						Politique de confidentialité
					</StyledLink>
					<StyledLink href="/CGS.pdf" className="footer">
						Conditions générales de service
					</StyledLink>
					<StyledLink href="https://legitbee-ficonum.web.app/" blank className="footer">
						Accès notaires
					</StyledLink>
					<StyledLink href="/report-death" className="footer">
						Signaler un décès
					</StyledLink>
				</StyledCol>
			</FooterContainer>
		</Container>
	);
}
