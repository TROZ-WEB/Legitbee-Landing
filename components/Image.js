// Dependencies
import styled from 'styled-components';

// Components

// Style
const StyledImage = styled.img`
	width: 100%;
	height: auto;
`;

// Render
export default function Image({ src, alt }) {
	return <StyledImage src={`/assets/images/${src}`} alt={alt} />;
}
