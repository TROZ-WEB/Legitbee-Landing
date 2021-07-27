// Dependencies
import styled from 'styled-components';
import { boxShadow } from '../../../../Theme';

// Components
import List from './List';
import Button from '../../../../components/Button';
import Price from '../Price';

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
	text-align: center;
	height: auto;
`;

const Title = styled.h2`
	position: relative;
	left: -3rem;
	margin-bottom: 2rem;
`;

// Render
export default function PriceBox({ monthPrice, yearPrice, title, caption, list, link, ...props }) {
	return (
		<Box>
			<Price monthPrice={monthPrice} yearPrice={yearPrice} />
			<Title>
				<mark>{title}</mark>
			</Title>
			<p className="mb-2">{caption}</p>
			<List list={list} />
			<Button to={link}>Découvrir</Button>
		</Box>
	);
}
