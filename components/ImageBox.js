// Dependencies
import styled from 'styled-components';
import { boxShadow } from '../Theme';
import { Row, Col } from 'reactstrap';
import Image from 'next/image';

// Components

// Style
const Box = styled(Row)`
	background-color: white;
	border-radius: 1rem;
	${boxShadow}
	position: relative;
	padding: 4rem 1rem 1rem 1rem;
	text-align: left;
	margin: ${(props) => (props.inversed ? '7rem 12rem 7rem 0rem' : '7rem 0rem 7rem 12rem')};
	padding: 2rem 5rem;
	position: relative;
	z-index: 50;

	@media (max-width: ${(props) => props.theme.lg}) {
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

const StyledImage = styled(Image)`
	width: 18rem;
`;

// Render
export default function ImageBox({ src, alt, title, caption, inversed, className }) {
	return (
		<Box inversed={inversed} className={className}>
			<TextCol md={{ size: 8, order: inversed && 2 }} inversed={inversed}>
				<h2 className="mb-1">{title}</h2>
				<p>{caption}</p>
			</TextCol>
			<ImgCol xs={{ size: 12, order: 1 }} md={{ size: 4, order: inversed && 1 }}>
				<StyledImage src={src} alt={alt} />
			</ImgCol>
		</Box>
	);
}
