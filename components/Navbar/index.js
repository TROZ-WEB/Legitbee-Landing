// Dependencies
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { boxShadow } from '../../Theme';
import { Navbar as Nav, Row, Col, Collapse } from 'reactstrap';
import Image from 'next/image';

// Components
import Button from '../Button';
import NavLink from './NavLink';
import Hamburger from './Hamburger';

// Functions
import useEvent from '../../functions/useEvent';

// Style
const NavbarContainer = styled(Nav)`
	width: 100vw;
	position: fixed;
	top: 0rem;
	left: 0rem;
	z-index: 1000;
	background-color: white;
	transition: all 0.5s;
	height: 4rem;
	padding: 0rem 4rem;
	display: flex;
	align-items: center;

	&.navshadow {
		${boxShadow}
	}

	@media (max-width: ${(props) => props.theme.sm}) {
		padding: 0rem 2rem;
	}
`;

const LinksContainer = styled(Col)`
	text-align: right;

	@media (max-width: ${(props) => props.theme.md}) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

const ImageContainer = styled.div`
	width: 9rem;
`;

const StyledCollapse = styled(Collapse)`
	@media (max-width: ${(props) => props.theme.md}) {
		width: 100vw;
		position: 3.75rem;
		left: 0rem;
		padding: 2rem;
		background-color: white;
		${boxShadow}
	}
`;

// Render
export default function Navbar({ active }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [showShadow, setShowShadow] = useState(false);

	const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);
	const handleCloseMenu = () => setIsMenuOpen(false);

	const handleScroll = () => {
		if (window.pageYOffset > 0) {
			setShowShadow(true);
		} else {
			setShowShadow(false);
		}
	};

	useEvent('scroll', handleScroll);

	return (
		<NavbarContainer className={`${showShadow && 'navshadow'}`} expand="lg">
			<Col xs={6} md={2}>
				<NavLink to="/">
					<ImageContainer>
						<Image
							src="/assets/images/logo.svg"
							alt="logo"
							width="413.246"
							height="128.353"
							loading="eager"
						/>
					</ImageContainer>
				</NavLink>
			</Col>
			<Col className="d-block d-lg-none d-flex justify-content-end">
				<Hamburger onClick={handleToggleMenu} isMenuOpen={isMenuOpen} />
			</Col>
			<StyledCollapse isOpen={isMenuOpen} navbar>
				<LinksContainer>
					<NavLink to="/features" active={active === 'features'}>
						Fonctionnalités
					</NavLink>
					<NavLink to="/security" active={active === 'security'}>
						Sécurité
					</NavLink>
					<NavLink to="/about" active={active === 'about'}>
						À propos
					</NavLink>
					<NavLink to="/pricing" active={active === 'pricing'}>
						Tarifs
					</NavLink>
					<Button className="secondary mx-2" to="https://app.legitbee.com/auth/register">
						Souscrire
					</Button>
					<Button className="mt-1 lg-mt-0" to="https://app.legitbee.com/auth/login">
						Se connecter
					</Button>
				</LinksContainer>
			</StyledCollapse>
		</NavbarContainer>
	);
}
