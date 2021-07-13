import React from "react";

export default function SimpleBanner(props) {
	return (
		<div className="simplebanner">
			<div className="simplebanner_container container--basic">
				<div className="simplebanner_text_container">
					<h1 className="simplebanner_title title">
						{props.contentData.title}
						{props.contentData.title_highlight ? (
							<span className="highlight">
								<br />
								{props.contentData.title_highlight}
							</span>
						) : (
							<div></div>
						)}
					</h1>
					<p className="simplebanner_text text">
						{props.contentData.text}
					</p>
				</div>
			</div>
		</div>
	);
}
