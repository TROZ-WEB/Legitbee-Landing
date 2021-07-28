// Dependencies
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';

// Components
import Container from '../components/Container';
import CEHDF from '../public/assets/images/partners/cehdf.png';
import Euratechnologies from '../public/assets/images/partners/euratechnologies.png';
import Nataxis from '../public/assets/images/partners/nataxis.png';
import NotairesPdc from '../public/assets/images/partners/notaires-pdc.png';
import Hodefi from '../public/assets/images/partners/hodefi.png';
import LeVillage from '../public/assets/images/partners/le-village.png';

// Style
const StyledSlide = styled(Slide)`
	div {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

const ImageContainer = styled.div`
	width: 100%;
	padding: 0rem 3rem;
	align-self: center;

	filter: grayscale(1) opacity(50%);
	-webkit-filter: grayscale(1) opacity(50%);
	transition: all 0.2s;

	&:hover {
		filter: grayscale(0) opacity(100%);
		-webkit-filter: grayscale(0) opacity(100%);
	}
`;

const Title = styled.h2`
	/* color: #9c9c9c; */
`;

// Render
export default function Partners() {
	var isTablet = useMediaQuery({ query: '(max-width: 48rem)' });
	var isMobile = useMediaQuery({ query: '(max-width: 36rem)' });
	return (
		<Container className="mt-5">
			<CarouselProvider
				naturalSlideWidth={100}
				naturalSlideHeight={50}
				totalSlides={6}
				visibleSlides={isTablet ? (isMobile ? 2 : 4) : 5}
				step={2}
				infinite={true}
				isPlaying={true}
				interval={3000}
			>
				<div>
					<Title>
						Ils nous font <mark>confiance</mark>
					</Title>
					<div>
						<Slider>
							<StyledSlide index={0}>
								<ImageContainer>
									<Image src={CEHDF} alt="cehdf" width="200" height="44" />
								</ImageContainer>
							</StyledSlide>
							<StyledSlide index={1}>
								<ImageContainer>
									<Image
										src={Euratechnologies}
										alt="euratechnologies"
										width="200"
										height="77"
									/>
								</ImageContainer>
							</StyledSlide>
							<StyledSlide index={2}>
								<ImageContainer>
									<Image src={Nataxis} alt="nataxis" width="200" height="64" />
								</ImageContainer>
							</StyledSlide>
							<StyledSlide index={3}>
								<ImageContainer>
									<Image
										src={NotairesPdc}
										alt="notaires-pdc"
										width="200"
										height="76"
									/>
								</ImageContainer>
							</StyledSlide>
							<StyledSlide index={4}>
								<ImageContainer>
									<Image src={Hodefi} alt="hodefi" width="200" height="54" />
								</ImageContainer>
							</StyledSlide>
							<StyledSlide index={5}>
								<ImageContainer>
									<Image
										src={LeVillage}
										alt="le-village"
										width="200"
										height="144"
									/>
								</ImageContainer>
							</StyledSlide>
						</Slider>
						{/* <ButtonBack className="partner_button partner_button--left">
							◀
						</ButtonBack>
						<ButtonNext className="partner_button partner_button--right">
							▶
						</ButtonNext> */}
					</div>
				</div>
			</CarouselProvider>
		</Container>
	);
}
