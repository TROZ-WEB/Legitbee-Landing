// Dependencies
import { Collapse, CardBody, Card } from 'reactstrap';
import styled from 'styled-components';

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
	top: 0rem;
	display: inline-flex;
	position: absolute;
	right: 0px;
`;

// Render
export default function Info({ info, openId, id, handleInfoClick }) {
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
