import React from "react";

function article_1() {
	return {
		date: "September, 2023",
		title: "E-Psipol SDM Polri",
		description:
			"Designing and implementing a web application utilized by the Indonesian National Police personnel for traffic incident reporting.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Keimal",
			"Keimal R",
			"Keimal Nayanajith",
		],
		tech : ['ReactJs, MUI, React Redux, HighchartJs'],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "January, 2022 — March, 2022",
		title: "E-Commerce Web",
		description:
			" design and implementation of an e-commerce application for PT. Hijau Solusi Utama, enhancing the online shopping experience for users. ",
		style: ``,
		tech : ['ReactJs, MUI, React Redux, HighchartJs'],
		keywords: [
			"E-Commerce Web",
			"Keimal",
			"Keimal R",
			"Keimal Reyyan",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
