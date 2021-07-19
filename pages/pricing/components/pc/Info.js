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
	border: 0.125rem solid ${(props) => props.theme.primary};
	color: ${(props) => props.theme.primary};
	width: 1.25rem;
	height: 1.25rem;
	border-radius: 4rem;
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
		margin-left: 0.313rem;
		background-color: ${(props) => props.theme.primary};
		color: white;
		box-shadow: 0 0.188rem 0.875rem rgba(102, 108, 117, 0.18);
		max-width: 18.75rem;
		text-align: left;
		padding: 1rem;
	}

	.arrow::before {
		border-right-color: ${(props) => props.theme.primary} !important;
		box-shadow: 0 0.188rem 0.875rem rgba(102, 108, 117, 0.18);
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
