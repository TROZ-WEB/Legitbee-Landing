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
`;

// Render
export default function NavLink({ to, ...props }) {
	return (
		<Link href={to} passHref>
			<NavbarLink>{props.children}</NavbarLink>
		</Link>
	);
}
