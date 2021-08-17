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
	position: relative;
	width: fit-content;
	display: inline;
	border: 0rem;
	background-color: transparent;
	padding: 0rem;
	-webkit-appearance: none !important;

	&:hover,
	&:focus {
		color: ${(props) => props.theme.secondary};
	}

	&.arrow {
		margin-right: 1rem;
	}

	&.arrow::after {
		content: '►';
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

	&.bottom {
		width: 7rem;
		position: absolute;
		margin-left: auto;
		margin-right: auto;
		left: 0;
		right: 0;
		text-align: center;
		bottom: 1rem;
	}
`;

// Render
export default function StyledLink({ className, href, blank, onClick, ...props }) {
	return (
		<>
			{href ? (
				<Link href={href} passHref>
					<SLink target={blank && '_blank'} className={className}>
						{props.children}
					</SLink>
				</Link>
			) : (
				<SLink className={className} onClick={onClick} as="button" type="button">
					{props.children}
				</SLink>
			)}
		</>
	);
}
