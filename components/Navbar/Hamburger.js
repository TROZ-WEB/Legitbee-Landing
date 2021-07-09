// Dependencies
import styled from 'styled-components';

// Components
import Button from '../Button';

// Style
const Burger = styled.div`
	width: 2rem;
	height: 1.5rem;
	margin: 0.5rem;
	position: relative;
	right: 0rem;
	transition: 0.5s ease-in-out;
	cursor: pointer;
	z-index: 1000;

	span {
		display: block;
		position: absolute;
		height: 0.141rem;
		width: 2rem;
		background: ${(props) => props.theme.primary};
		border-radius: 0.5rem;
		opacity: 1;
		left: 0;
		transform: rotate(0deg), scale(1, 1);
		transition: 0.2s ease-in-out;
	}

	span:nth-child(1) {
		top: 0rem;
		transform: ${(props) => (props.isMenuOpen ? 'scale(0, 0)' : 'scale(1, 1)')};
	}

	span:nth-child(2) {
		top: 0.5rem;
		transform: ${(props) => (props.isMenuOpen ? 'rotate(45deg)' : 'rotate(0deg)')};
	}

	span:nth-child(3) {
		top: 0.5rem;
		transform: ${(props) => (props.isMenuOpen ? 'rotate(-45deg)' : 'rotate(0deg)')};
	}

	span:nth-child(4) {
		top: 1rem;
		transform: ${(props) => (props.isMenuOpen ? 'scale(0, 0)' : 'scale(1, 1)')};
	}
`;

// Render
export default function Hamburger({ onClick, isMenuOpen }) {
	return (
		<Button className="nobutton d-lg-none" onClick={onClick}>
			<Burger isMenuOpen={isMenuOpen}>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</Burger>
		</Button>
	);
}
