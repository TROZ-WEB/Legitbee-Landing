// Dependencies
import { Collapse, CardBody, Card } from 'reactstrap';
import styled from 'styled-components';

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
	top: 0rem;
	display: inline-flex;
	position: absolute;
	right: 0rem;
`;

// Render
export default function Info({ info, openId, id, handleInfoClick, ...props }) {
	return (
		<>
			<Button onClick={() => handleInfoClick(id)}>?</Button>
			<Collapse isOpen={openId == id ? true : false}>
				<Card>
					<CardBody>{info}</CardBody>
				</Card>
			</Collapse>
		</>
	);
}
