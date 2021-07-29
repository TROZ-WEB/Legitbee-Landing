// Dependencies
import { useMediaQuery } from 'react-responsive';

// Components
import Table from '../pages/pricing/components/pc/Table';
import TablePhone from '../pages/pricing/components/phone/TablePhone';

// Style

// Render
export default function Pricing() {
	var isMobile = useMediaQuery({ query: '(max-width: 36rem)' });
	return (
		<>
			<h1 className="mt-3">
				Nos <mark>offres</mark>
			</h1>
			{isMobile ? <TablePhone /> : <Table className="mt-5" />}
		</>
	);
}
