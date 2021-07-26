// Dependencies
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { fontSize } from '../Theme';

// Components
import Container from '../components/Container';

// Style
const StyledSlide = styled(Slide)`
	div {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

const Image = styled.img`
	width: 100%;
	padding: 0rem 3rem;
	align-self: center;

	filter: grayscale(1) opacity(50%);
	-webkit-filter: grayscale(1) opacity(50%);
`;

const Title = styled.h2`
	color: #9c9c9c;
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
				visibleSlides={isTablet ? (isMobile ? 2 : 4) : 6}
				step={2}
				infinite={true}
				isPlaying={true}
				interval={3000}
			>
				<div>
					<Title>Ils nous font confiance</Title>
					<div>
						<Slider>
							<StyledSlide index={0}>
								<Image src="/assets/images/partners/cehdf.png" alt="cehdf" />
							</StyledSlide>
							<StyledSlide index={1}>
								<Image
									src="/assets/images/partners/euratechnologies.png"
									alt="euratechnologies"
								/>
							</StyledSlide>
							<StyledSlide index={2}>
								<Image src="/assets/images/partners/nataxis.png" alt="nataxis" />
							</StyledSlide>
							<StyledSlide index={3}>
								<Image
									src="/assets/images/partners/notaires-pdc.png"
									alt="notaires-pdc"
								/>
							</StyledSlide>
							<StyledSlide index={4}>
								<Image src="/assets/images/partners/hodefi.png" alt="hodefi" />
							</StyledSlide>
							<StyledSlide index={5}>
								<Image
									src="/assets/images/partners/le-village.png"
									alt="le-village"
								/>
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
