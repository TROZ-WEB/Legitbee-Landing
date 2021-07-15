// Dependencies
import styled from 'styled-components';
import { fontSize } from '../../../Theme';

// Components

// Style
const Container = styled.div`
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
export default function Price({ monthPrice, yearPrice }) {
	return (
		<Container>
			<MonthPrice>{monthPrice}</MonthPrice>
			<YearPrice>{yearPrice}</YearPrice>
		</Container>
	);
}
