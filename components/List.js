// Dependencies
import styled from 'styled-components';

// Components

// Style
const ListContainer = styled.ul`
	list-style: none;
	padding-left: 1rem;
`;

const ListItem = styled.li`
	background-image: url(/assets/images/list.svg);
	background-repeat: no-repeat;
	background-size: 1rem 1rem;
	background-position: 0rem 0.3rem;
	padding-left: 1.75rem;
	text-align: left;
`;

// Render
export default function List({ items, ...props }) {
	return (
		<ListContainer>
			{items?.map((item, i) => (
				<ListItem key={i}>{item}</ListItem>
			))}
		</ListContainer>
	);
}
