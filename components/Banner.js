// Dependencies
import styled from 'styled-components';

// Components

// Style
const Container = styled.div`
	margin: 6rem 0rem 2rem 0rem;
`;

const Image = styled.img`
	width: 100%;
	margin: 2rem 0rem;
`;

// Render
export default function Banner(props) {
	return (
		<Container>
			{props.children}
			<Image src="/assets/images/delimitation.svg" alt="delimitation" />
		</Container>
	);
}
