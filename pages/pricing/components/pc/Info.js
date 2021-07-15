// Dependencies
import { useState } from 'react';
import styled from 'styled-components';
import { Tooltip } from 'reactstrap';

// Style
const Button = styled.button`
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 2px solid ${(props) => props.theme.primary};
	color: ${(props) => props.theme.primary};
	width: 20px;
	height: 20px;
	border-radius: 50px;
	cursor: pointer;
	top: 50%;
	transform: translateY(-50%);
	display: inline-flex;
	position: absolute;
	right: 1rem;
`;

const StyledTooltip = styled(Tooltip)`
	.tooltip {
		z-index: 100;
	}

	.tooltip-inner {
		margin-left: 5px;
		background-color: ${(props) => props.theme.primary};
		color: white;
		box-shadow: 0 3px 14px rgba(102, 108, 117, 0.18);
		max-width: 300px;
		text-align: left;
		padding: 1rem;
	}

	.arrow::before {
		border-right-color: ${(props) => props.theme.primary} !important;
		box-shadow: 0 3px 14px rgba(102, 108, 117, 0.18);
	}
`;

// Render
export default function Info({ id, text }) {
	const [tooltipOpen, setTooltipOpen] = useState(false);
	const toggle = () => setTooltipOpen(!tooltipOpen);

	return (
		<>
			<Button id={'info' + id}>?</Button>
			<StyledTooltip
				placement="right"
				isOpen={tooltipOpen}
				target={'info' + id}
				toggle={toggle}
				fade={false}
			>
				{text}
			</StyledTooltip>
		</>
	);
}
