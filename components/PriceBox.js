// Dependencies
import styled from 'styled-components';
import { fontSize, boxShadow } from '../Theme';

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
	margin-top: 4rem;
	text-align: center;

	@media (max-width: ${(props) => props.theme.md}) {
		height: 14rem;
	}

	@media (max-width: ${(props) => props.theme.sm}) {
		height: auto;
	}
`;

const Title = styled.h2`
	position: relative;
	left: -3rem;
	margin-bottom: 2rem;
`;

const Price = styled.div`
	background-image: url(/assets/images/blue-hexagon.svg);
	background-size: cover;
	background-repeat: no-repeat;
	width: 6rem;
	height: 7rem;
	position: absolute;
	top: 0;
	right: 2rem;
	transform: translateY(-50%);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media (max-width: ${(props) => props.theme.md}) {
		right: 1rem;
	}
`;

const MonthPrice = styled.p`
	font-family: 'DM Serif Display', serif;
	${fontSize(24)};
	color: white;
`;

const YearPrice = styled.p`
	font-family: 'DM Serif Display', serif;
	${fontSize(15)};
	color: white;
`;

// Render
export default function PriceBox({ monthPrice, yearPrice, title, caption }) {
	return (
		<Box>
			<Price>
				<MonthPrice>{monthPrice}</MonthPrice>
				<YearPrice>{yearPrice}</YearPrice>
			</Price>
			<Title>
				<mark>{title}</mark>
			</Title>
			<p>{caption}</p>
		</Box>
	);
}
