// Components
import PriceBox from './PriceBox';
import { Row, Col } from 'reactstrap';

// Style

// Data
import Content from '../../../../public/assets/data/content.json';

// Render
export default function TablePhone() {
	return (
		<Row>
			{Content.pricingPhone.content.map((item, i) => (
				<>
					{item.title !== 'Numérique' && (
						<Col key={i} xs={12}>
							<PriceBox
								key={i}
								monthPrice={item.monthPrice}
								yearPrice={item.yearPrice}
								title={item.title}
								caption={item.caption}
								list={item.list}
							/>
						</Col>
					)}
				</>
			))}
		</Row>
	);
}
