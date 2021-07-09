// Dependencies
import styled from 'styled-components';
import { boxShadow } from '../Theme';

// Components

// Style
const Box = styled.div`
	flex-shrink: 0;
	background-color: white;
	margin: auto;
	width: 20rem;
	height: 22rem;
	border-radius: 1rem;
	${boxShadow}
	position: relative;
	padding: 2rem;
	margin-bottom: 2rem;
	text-align: left;
	margin-right: 2rem;
	position: relative;
	z-index: 50;
`;

const Title = styled.h2`
	height: 3rem;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 0.5rem;
`;

// const Number = styled.h1`
// 	height: 3rem;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	margin-bottom: 0.5rem;
// `;

// Render
export default function NumberBox({ number, title, caption }) {
	return (
		<Box>
			<h1>
				<mark>{number}.</mark>
			</h1>
			<Title className="my-1">{title}</Title>
			<p>{caption}</p>
		</Box>
	);
}
