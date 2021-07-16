// Dependencies
import Link from 'next/link';
import styled from 'styled-components';
import { boxShadow } from '../Theme';

// Components

// Style
const Icon = styled.div`
	width: 2.5rem;
	height: 2.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 2rem;
	margin-right: 1rem;
	${boxShadow}

	svg {
		fill: ${(props) => props.theme.primary};
		width: 1.25rem;
		transition: all 0.1s;
	}
`;

const SLink = styled.a`
	margin-top: 1.5rem;
	display: flex;
	align-items: center;
	cursor: pointer;
	transition: all 0.1s;
	color: ${(props) => props.theme.grey};
	text-decoration: none;

	&:hover,
	&:focus {
		color: ${(props) => props.theme.secondary};

		svg {
			fill: ${(props) => props.theme.secondary};
		}
	}

	@media (max-width: ${(props) => props.theme.sm}) {
		flex-direction: column;
		text-align: center;
	}
`;

// Render
export default function IconLink({ className, href, caption, blank, ...props }) {
	return (
		<Link href={href} passHref>
			<SLink target={blank && '_blank'}>
				<Icon className={className}>{props.children}</Icon>
				{caption}
			</SLink>
		</Link>
	);
}
