// Dependencies
import styled from 'styled-components';
import { boxShadow } from '../../../../Theme';

// Components
import List from './List';
import Button from '../../../../components/Button';

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
	margin-top: 4rem;
	height: auto;
`;

const Title = styled.h2`
	margin-bottom: 2rem;
`;

const Price = styled.div`
	background-color: ${(props) => props.theme.primary};
	width: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 4rem;
	margin: 1rem -1rem;

	h2,
	p {
		color: white;
	}
`;

// Render
export default function PriceBox({ monthPrice, yearPrice, title, caption, list, link, ...props }) {
	return (
		<Box>
			<Title>
				<mark>{title}</mark>
			</Title>
			<p className="mb-1">{caption}</p>
			<Price>
				<h2>{monthPrice}</h2>
				<p>{yearPrice}</p>
			</Price>
			<List list={list} />
			<div className="text-center">
				<Button to={link}>Découvrir</Button>
			</div>
		</Box>
	);
}
