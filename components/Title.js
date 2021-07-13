// Dependencies
// import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import styled from 'styled-components';

// Components

// Style
const StyledTitle = styled.h1`
	text-align: center;
	margin: 6rem 0rem 5rem 0rem;
	background-color: white;

	@media (max-width: ${(props) => props.theme.sm}) {
		margin: 4rem 0rem 4rem 0rem;
	}
`;

// Render
export default function Title({ ...props }) {
	return <StyledTitle>{props.children}</StyledTitle>;
}
