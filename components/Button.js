// Dependencies
import styled from 'styled-components';
import Link from 'next/link';

// Components

// Style
const Btn = styled.button`
	background-color: ${(props) => props.theme.primary};
	border: 0.125rem solid ${(props) => props.theme.primary};
	color: white;
	border-radius: 10rem;
	padding: 0.25rem 1rem;
	text-decoration: none;
	transition: all 0.1s;
	width: fit-content;

	&:hover,
	&:focus {
		background-color: ${(props) => props.theme.secondary};
		border: 0.125rem solid ${(props) => props.theme.secondary};
		color: white;
	}

	&.secondary {
		background-color: white;
		color: ${(props) => props.theme.primary};

		&:hover,
		&:focus {
			background-color: ${(props) => props.theme.secondary};
			border: 0.125rem solid ${(props) => props.theme.secondary};
			color: white;
		}
	}

	&.nobutton {
		border: 0rem;
		background-color: transparent;
		padding: 0rem;
		display: flex;
		align-items: center;
	}

	&.big {
		padding: 0.5rem 1.5rem;
	}
`;

// Render
export default function Button({ className, onClick, type, to, ...props }) {
	return (
		<>
			{to ? (
				<Link href={to} passHref>
					<Btn className={className} as="a">
						{props.children}
					</Btn>
				</Link>
			) : (
				<Btn className={className} onClick={onClick} type={type || 'button'}>
					{props.children}
				</Btn>
			)}
		</>
	);
}
