// Dependencies
import styled from 'styled-components';

// Components

// Style
const StyledContainer = styled.div`
	width: 81.25rem;
	max-width: 90vw;
	margin: 0 auto;
	position: relative;
`;

// Render
export default function Container({ ...props }) {
	return <StyledContainer>{props.children}</StyledContainer>;
}
