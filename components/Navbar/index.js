// Dependencies
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { boxShadow } from '../../Theme';
import { Navbar as Nav, Row, Col, Collapse } from 'reactstrap';

if (typeof window === 'undefined') {
	global.window = {};
}

// Components
import Button from '../Button';
import NavLink from './NavLink';
import Hamburger from './Hamburger';

// Style
const NavbarContainer = styled(Nav)`
	width: 100%;
	position: fixed;
	top: 0rem;
	left: 0rem;
	z-index: 10000;
	background-color: white;
	transition: all 0.5s;
	height: 4rem;
	padding: 0rem 4rem;
	display: flex;
	align-items: center;

	&.navshadow {
		${boxShadow}
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

const Logo = styled.img`
	width: 9rem;
`;

const StyledCollapse = styled(Collapse)`
	@media (max-width: ${(props) => props.theme.md}) {
		width: 100vw;
		position: absolute;
		top: 60px;
		left: 0px;
		padding: 2rem;
		background-color: white;
		${boxShadow}
	}
`;

// Render
export default function Navbar() {
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

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	}, []);

	return (
		<NavbarContainer className={`${showShadow && 'navshadow'}`} expand="lg">
			<Col xs={6} md={4}>
				<NavLink to="/">
					<Logo src="/assets/images/logo.svg" alt="logo" />
				</NavLink>
			</Col>
			<Col className="d-block d-lg-none d-flex justify-content-end">
				<Hamburger onClick={handleToggleMenu} isMenuOpen={isMenuOpen} />
			</Col>
			<StyledCollapse isOpen={isMenuOpen} navbar>
				<LinksContainer>
					<NavLink to="/fonctionnalites">Fonctionnalités</NavLink>
					<NavLink to="/securite">Sécurité</NavLink>
					<NavLink to="/a-propos">À propos</NavLink>
					<NavLink to="/tarifs">Tarifs</NavLink>
					<Button className="secondary mx-2" to="https://app.legitbee.com/auth/register">
						Souscrire
					</Button>
					<Button className="md-mt-1" to="https://app.legitbee.com/auth/login">
						Se connecter
					</Button>
				</LinksContainer>
			</StyledCollapse>
		</NavbarContainer>
	);
}
