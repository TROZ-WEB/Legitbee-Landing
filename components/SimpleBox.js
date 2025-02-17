// Dependencies
import styled from 'styled-components';
import { boxShadow } from '../Theme';

// Components

// Style
const Box = styled.div`
	background-color: white;
	margin: auto;
	max-width: 25rem;
	height: 12rem;
	border-radius: 1rem;
	${boxShadow}
	position: relative;
	padding: 2rem 1rem;
	margin-bottom: 2rem;
	text-align: center;

	@media (max-width: ${(props) => props.theme.sm}) {
		height: auto;
	}
`;

const Title = styled.h2`
	height: 3rem;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 1.4rem;
`;

// Render
export default function SimpleBox({ title, caption }) {
	return (
		<Box>
			<Title>
				<mark>{title}</mark>
			</Title>
			<p>{caption}</p>
		</Box>
	);
}
