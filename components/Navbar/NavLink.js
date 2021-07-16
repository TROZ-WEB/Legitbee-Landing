// Dependencies
import Link from 'next/link';
import styled from 'styled-components';

// Components

// Style
const NavbarLink = styled.a`
	color: ${(props) => props.theme.primary};
	text-decoration: none;
	padding: 1rem;

	&:hover {
		color: ${(props) => props.theme.secondary};
	}

	${(props) => props.active && `color : ${props.theme.secondary}`}
`;

// Render
export default function NavLink({ to, active, ...props }) {
	return (
		<Link href={to} passHref>
			<NavbarLink active={active}>{props.children}</NavbarLink>
		</Link>
	);
}
