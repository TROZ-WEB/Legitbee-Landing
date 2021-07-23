// Dependencies
import Link from 'next/link';
import styled from 'styled-components';
import { fontSize } from '../Theme';

// Components

// Style
const SLink = styled.a`
	color: ${(props) => props.theme.primary};
	text-decoration: none;
	transition: all 0.2s;
	display: block;
	position: relative;
	width: fit-content;
	display: inline;

	&:hover,
	&:focus {
		color: ${(props) => props.theme.secondary};
	}

	&.arrow {
		margin-right: 1rem;
	}

	&.arrow::after {
		content: '▶';
		${fontSize(12)}
		transition: all 0.2s;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: -1.1rem;
	}

	&.arrow:hover::after {
		right: -1.5rem;
	}

	&.arrow:hover {
		color: ${(props) => props.theme.primary};
	}

	&.footer {
		color: ${(props) => props.theme.grey};
		margin: 1rem 0rem;
		display: block;
	}

	&.footer:hover {
		color: ${(props) => props.theme.secondary};
	}
`;

// Render
export default function StyledLink({ className, href, blank, ...props }) {
	return (
		<Link href={href} passHref>
			<SLink target={blank && '_blank'} className={className}>
				{props.children}
			</SLink>
		</Link>
	);
}
