import React from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./style/article.css";

const Article = (props) => {
	const { date, title, description, link, tech } = props;
	return (
		<React.Fragment>
			<div className="article">
				<div className="article-left-side">
					<div className="article-date">{date}</div>
				</div>

				<Link to={link}>
					<div className="article-right-side">
						<div className="article-title">{title}</div>
						<div className="article-description">{description}</div>
						<div className="article-link">
							<span style={{ fontWeight:700 }}>Tech : </span>
							{tech?.map((dt, i) =>(
								<span>{dt}</span>
							))}
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Article;
