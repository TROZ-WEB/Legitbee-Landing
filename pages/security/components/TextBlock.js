// Dependencies

// Components
import List from '../../../components/List';
import StyledLink from '../../../components/StyledLink';

// Style

// Render
export default function TextBlock({ title, caption, list, link }) {
	return (
		<>
			<h2>{title}</h2>
			<p>{caption}</p>
			<List items={list} />
			{link && (
				<StyledLink className="arrow" href={link?.href}>
					{link?.label}
				</StyledLink>
			)}
		</>
	);
}
