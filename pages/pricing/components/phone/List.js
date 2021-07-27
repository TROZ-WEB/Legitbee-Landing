// Dependencies
import styled from 'styled-components';
import { useState } from 'react';

// Components
import Info from './Info';

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
	padding: 0rem 1.75rem 0.5rem 1.75rem;
	text-align: left;
	position: relative;
`;

// Render
export default function List({ list, ...props }) {
	const [openId, setOpenId] = useState(-1);

	const handleInfoClick = (questionId) => {
		if (openId == questionId) {
			setOpenId(-1); // close all cards
		} else {
			setOpenId(questionId);
		}
	};

	return (
		<ListContainer>
			{list?.map((item, i) => (
				<ListItem key={i}>
					{item.label}{' '}
					{item.info && (
						<Info
							handleInfoClick={handleInfoClick}
							openId={openId}
							info={item.info}
							id={i}
						/>
					)}
				</ListItem>
			))}
		</ListContainer>
	);
}
