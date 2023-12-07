import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./logoIris.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">PT. Sigma Cipta Caraka</div>
							<div className="work-subtitle">
								Frontend Developer
							</div>
							<div className="work-duration">2022 - Present</div>
						</div>

						<div className="work">
							<div className="work-image" style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
								<img
									src="./logoZone.png"
									alt="twitter"
									style={{ width:20, height:20 }}
								/>
							</div>
							<div className="work-title">PT. ZoneArt Indonesia</div>
							<div className="work-subtitle">
								Frontend Developer
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
