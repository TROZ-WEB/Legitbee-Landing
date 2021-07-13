// Dependencies
import styled from 'styled-components';
import { boxShadow } from '../Theme';
import { Row, Col } from 'reactstrap';

// Components

// Style
const Box = styled(Row)`
	background-color: white;
	border-radius: 1rem;
	${boxShadow}
	position: relative;
	padding: 4rem 1rem 1rem 1rem;
	margin-top: 4rem;
	text-align: left;
	margin: ${(props) => (props.inversed ? '5rem 12rem 5rem 7rem' : '5rem 7rem 5rem 12rem')};
	padding: 2rem 5rem;
	position: relative;
	z-index: 50;

	@media (max-width: ${(props) => props.theme.md}) {
		margin: 5rem 0rem 0rem 0rem;
	}

	@media (max-width: ${(props) => props.theme.sm}) {
		padding: 1rem;
	}
`;

const ImgCol = styled(Col)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const TextCol = styled(Col)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding: ${(props) => (props.inversed ? '0rem 0rem 0rem 4rem' : '0rem 4rem 0rem 0rem')};

	@media (max-width: ${(props) => props.theme.sm}) {
		padding: 1rem;
	}
`;

const Image = styled.img`
	width: 15rem;
`;

// Render
export default function ImageBox({ src, alt, title, caption, inversed }) {
	return (
		<Box inversed={inversed}>
			<TextCol md={{ size: 9, order: inversed && 2 }} inversed={inversed}>
				<h2>{title}</h2>
				<p>{caption}</p>
			</TextCol>
			<ImgCol xs={{ size: 12, order: 1 }} md={{ size: 3, order: inversed && 1 }}>
				<Image src={src} alt={alt} />
			</ImgCol>
		</Box>
	);
}
