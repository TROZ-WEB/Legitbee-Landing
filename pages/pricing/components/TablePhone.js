// Dependencies
import { useState } from 'react';
import styled from 'styled-components';

// Components
import InfoPhone from './InfoPhone';
import PriceBox from '../../../components/PriceBox';

// Style

// Render
export default function TablePhone(props) {
	return (
		<>
			{Content.pricing.map((item, i) => (
				<PriceBox monthPrice="" yearPrice="" title="" caption="" list="" />
			))}
		</>
	);
}
