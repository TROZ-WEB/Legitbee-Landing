// Dependencies
import { useState, useRef } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

if (typeof window === 'undefined') {
	global.window = {};
}

// Components
import Title from '../components/Title';
import NumberBox from '../components/NumberBox';
import Container from '../components/Container';

// Style
const BoxContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Section = styled.div`
	height: 150rem;
	position: relative;

	@media (max-width: ${(props) => props.theme.md}) {
		height: 200rem;
	}
`;

const SliderContainer = styled.div`
	position: absolute;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	${(props) =>
		props.position === 'fixed' && 'position: fixed; top: 50%; transform: translateY(-50%);'};
	${(props) => props.position === 'absolute' && 'bottom: 1.875rem;'};
`;

const Rect = styled.div`
	border: 0.125rem solid ${(props) => props.theme.secondary};
	margin: 0rem -3rem;
	border-radius: 2rem;
	width: 114rem;
	height: 14rem;
	position: absolute;
	bottom: -2rem;
`;

// Functions
import useEvent from '../functions/useEvent';
import useRect from '../functions/useRect';

// Data
import Content from '../public/assets/data/content.json';

// Render
export default function How() {
	const [Xpos, setXpos] = useState(0);
	// const [sliderTop, setSliderTop] = useState(0);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [windowHeight, setWindowHeight] = useState(window.innerHeight);
	const [position, setPosition] = useState('');

	let section = useRef();
	let slider = useRef();
	let sectionRect = useRect(section);
	let sliderRect = useRect(slider);

	const handleResize = (e) => {
		setWindowWidth(window.innerWidth);
		setWindowHeight(window.innerHeight);
	};

	const handleScroll = (e) => {
		if (windowWidth > 576) {
			let window_top = window.scrollY;
			let window_bottom = window_top + window.innerHeight;

			console.log('sectionRect.top :', sectionRect.top);

			let offset = window_bottom - sliderRect.top;
			let scroll_spead = (offset / 100) * 75 - 900; // (/ 100) * 75 to have a good horizontal scrolling speed, -900 for good initial placement
			setXpos(-scroll_spead);

			if (sliderRect.top !== 0) {
				// when windows arrive to the bottom of the container of the scrolling section, we make the slider absolute with bottom = 0
				if (window_bottom >= sectionRect.bottom) {
					// console.log('after');
					setPosition('absolute');
					// when windows arrive to the bottom of the scrolling section, we fix the section on the middle of the screen
				} else if (window_top >= sectionRect.top) {
					// console.log('during');
					setPosition('fixed');
					// when windows is on top of the scrolling section, we remove the unused classes
				} else {
					// console.log('before');
					setPosition('');
				}
			}
		}
	};

	useEvent('resize', handleResize);
	useEvent('scroll', handleScroll);

	var isMobile = useMediaQuery({ query: '(max-width: 36rem)' });

	return (
		<>
			{isMobile ? (
				<Container>
					<Title>
						Comment
						<mark> ça marche </mark>?
					</Title>
					{Content.how.map((item, i) => (
						<NumberBox
							key={i}
							number={i + 1}
							title={item.title}
							caption={item.caption}
						/>
					))}
				</Container>
			) : (
				<Section ref={section}>
					<SliderContainer position={position}>
						<Title>
							Comment
							<mark> ça marche </mark>?
						</Title>
						<div
							ref={slider}
							style={{
								transform: 'translateX(' + String(Xpos) + 'px)',
							}}
						>
							<BoxContainer>
								{Content.how.map((item, i) => (
									<NumberBox
										key={i}
										number={i + 1}
										title={item.title}
										caption={item.caption}
									/>
								))}
							</BoxContainer>
							<Rect />
						</div>
					</SliderContainer>
				</Section>
			)}
		</>
	);
}
