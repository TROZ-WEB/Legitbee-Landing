import React from 'react';

import { Collapse, CardBody, Card } from 'reactstrap';

export default function InfoPhone(props) {
	// console.log(props.id);
	return (
		<span>
			<span
				className="price2_info_button_container price2_info_button_container--phone"
				id={'price2_info' + props.id}
				onClick={() => props.handleInfoClick(props.id)}
			>
				<span className="price2_info_button">?</span>
			</span>
			<Collapse isOpen={props.openId == props.id ? true : false}>
				<Card>
					<CardBody>{props.info}</CardBody>
				</Card>
			</Collapse>
		</span>
	);
}
