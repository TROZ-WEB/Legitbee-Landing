// Dependencies
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';

// Components
import Container from '../components/Container';
import List from '../components/List';
import Button from '../components/Button';

// Style
const Image = styled.img`
	width: 100%;
	max-width: 32rem;
`;

const CSN = styled.img`
	max-height: 4rem;
`;

const BV = styled.img`
	max-height: 6rem;
`;

const StyledRow = styled(Row)`
	margin-top: 3rem;
`;

const LeftCol = styled(Col)`
	min-height: 70vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (max-width: ${(props) => props.theme.md}) {
		text-align: center;
		display: block;
		margin-bottom: 4rem;
		min-height: auto;
	}
`;

const RightCol = styled(Col)`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const TextContainer = styled.div`
	max-width: 30rem;
`;

// Render
export default function Labels() {
	return (
		<Container>
			<div className="d-flex flex-column align-items-center">
				<h2 className="mt-3 mb-1">
					Audité, labellisé et soutenu par le <mark>Conseil Supérieur du Notariat</mark>
				</h2>
				<div>
					<CSN
						src="/assets/images/CSN.png"
						alt="Conseil Supérieur du Notariat"
						className="mr-3"
					/>
					<BV src="/assets/images/BV.png" alt="Bureau Veritas" />
				</div>
			</div>
		</Container>
	);
}
