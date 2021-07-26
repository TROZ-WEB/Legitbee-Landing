// Dependencies
import styled from 'styled-components';
import { boxShadow } from '../Theme';

// Components

// Style
const Box = styled.div`
	background-color: white;
	margin: auto;
	max-width: 25rem;
	height: 13rem;
	border-radius: 1rem;
	position: relative;
	padding: 4rem 1rem 2rem 1rem;
	margin-top: 4rem;
	margin-bottom: 1rem;
	text-align: center;
	${boxShadow};

	&.height {
		height: 14rem;

		@media (max-width: ${(props) => props.theme.xl}) {
			height: 15rem;
		}
	}

	&.noshadow {
		box-shadow: none;
	}

	@media (max-width: ${(props) => props.theme.xl}) {
		height: 15rem;
	}

	@media (max-width: ${(props) => props.theme.sm}) {
		height: auto;
	}
`;

const Image = styled.img`
	width: 6rem;
	position: absolute;
	top: 0;
	left: 50%;
	transform: translate(-50%, -50%);
`;

// Render
export default function IconBox({ src, alt, title, caption, className }) {
	return (
		<Box className={className}>
			<Image src={src} alt={alt} />
			<h2 className="mb-05">
				<mark>{title}</mark>
			</h2>
			<p>{caption}</p>
		</Box>
	);
}
