// Dependencies
import { useState } from 'react';
import NextImage from 'next/image';
import styled from 'styled-components';

// Components

// Style
const StyledImage = styled(NextImage)`
	opacity: 0;
	transition: all 0.2s;

	&.loaded {
		opacity: 1;
	}
`;

// Render
export default function Image({ src, alt, width, height }) {
	const [isLoaded, setIsLoaded] = useState(false);
	return (
		<StyledImage
			className={`${isLoaded && 'loaded'}`}
			src={src}
			alt={alt}
			width={width}
			height={height}
			onLoad={(event) => {
				const target = event.target;
				if (target.src.indexOf('data:image;base64') < 0) {
					setIsLoaded(true);
				}
			}}
		/>
	);
}
