// Dependencies
import styled from 'styled-components';
import Image from 'next/image';

// Components

// Style
const Container = styled.div`
	margin: 6rem 0rem 2rem 0rem;
`;

const ImageContainer = styled.div`
	width: 100%;
	margin: 2rem 0rem !important;
`;

// Render
export default function Banner(props) {
	return (
		<Container>
			{props.children}
			<ImageContainer>
				<Image
					src="/assets/images/delimitation.svg"
					alt="delimitation"
					width="1212.623"
					height="45.656"
				/>
			</ImageContainer>
		</Container>
	);
}
