// Dependencies
import styled from 'styled-components';
import Image from 'next/image';

// Components
import Delimitation from '../public/assets/images/delimitation.svg';

// Style
const Container = styled.div`
	margin: 6rem 0rem 2rem 0rem;
`;

const StyledImage = styled(Image)`
	img {
		width: 100%;
		margin: 2rem 0rem !important;
	}
`;

// Render
export default function Banner(props) {
	return (
		<Container>
			{props.children}
			<StyledImage src={Delimitation} alt="delimitation" layout="fill" />
		</Container>
	);
}
