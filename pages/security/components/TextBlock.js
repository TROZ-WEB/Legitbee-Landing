// Dependencies

// Components
import List from '../../../components/List';
import StyledLink from '../../../components/StyledLink';

// Style

// Render
export default function TextBlock({ title, caption, list, link, ...props }) {
	return (
		<>
			<h2 className="my-2">{title}</h2>
			<p className="mb-2">{caption}</p>
			<List items={list} />
			{link && (
				<StyledLink className="arrow mt-2" href={link?.href}>
					{link?.label}
				</StyledLink>
			)}
		</>
	);
}
