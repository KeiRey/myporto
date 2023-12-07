import React from "react";
// import { Link } from "react-router-dom";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./styles/article.css";

const Article = (props) => {
	const { title, description, date,
		//  link,
		  tech } = props;

	return (
		<React.Fragment>
			<div className="homepage-article">
				<div className="homepage-article-content">
					<div className="homepage-article-date">
						|&nbsp;&nbsp;&nbsp;{date}
					</div>
					<div className="homepage-article-title">{title}</div>
					<div className="homepage-article-description">
						{description}
					</div>
					<div className="homepage-article-link">
							<span style={{ fontWeight:700 }}>Tech : </span>
							{tech?.map((dt, i) =>(
								<span>{dt}</span>
							))}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Article;
