// Dependencies
import { useState } from 'react';
import { Collapse } from 'reactstrap';
import styled from 'styled-components';

// Components

// Style
const Button = styled.button`
	width: 100%;
	background-color: ${(props) => props.theme.lightPrimary};
	text-align: left;
	position: relative;
	z-index: 10;
	border-radius: 0.25rem;
	border: 0;
	padding: 1rem 3rem;
	cursor: pointer;
	margin-bottom: 1rem;

	&::before {
		content: '';
		position: absolute;
		height: 0.125rem;
		width: 0.75rem;
		background: ${(props) => props.theme.primary};
		top: 50%;
		right: 1.875rem;
	}

	&::after {
		content: '';
		position: absolute;
		height: 0.125rem;
		width: 0.75rem;
		background: ${(props) => props.theme.primary};
		top: 50%;
		-moz-transition: all 0.3s ease;
		transition: all 0.3s ease;
		right: 1.875rem;
		transform: ${(props) => (props.isOpen ? 'rotate(0deg)' : 'rotate(90deg)')};
	}
`;

const Answer = styled(Collapse)`
	border: 0.125rem solid ${(props) => props.theme.lightPrimary};
	border-radius: 0rem 0rem 2rem 2rem;
	position: relative;
	top: -2rem;
`;

// Render
export default function FAQCollapse({ question, answer, questionId, openId, handleFAQClick }) {
	const isOpen = questionId === openId;

	return (
		<div>
			<Button onClick={() => handleFAQClick(questionId)} isOpen={isOpen}>
				<h2>{question}</h2>
			</Button>
			<Answer isOpen={isOpen}>
				<p className="m-2 mb-1">{answer}</p>
			</Answer>
		</div>
	);
}
