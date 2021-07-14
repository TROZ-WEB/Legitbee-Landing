import React, { useState } from 'react';

import { Tooltip } from 'reactstrap';

export default function Info(props) {
	const [tooltipOpen, setTooltipOpen] = useState(false);

	const toggle = () => setTooltipOpen(!tooltipOpen);
	return (
		<span>
			<span className="price2_info_button_container" id={'price2_info' + props.id}>
				<span className="price2_info_button">?</span>
			</span>
			<Tooltip
				placement="right"
				isOpen={tooltipOpen}
				target={'price2_info' + props.id}
				toggle={toggle}
				className="price2_tooltip"
			>
				{props.text}
			</Tooltip>
		</span>
	);
}
