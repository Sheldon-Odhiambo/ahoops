import React from "react";
import ImageHome from "./Home.jpg";
import { NavLink } from "react-router-dom";

const Combined = () => {
	return (
		<>
			<div className="card">
				<h2>Web Design</h2>
				<img src={ImageHome} alt="solution1" className="serviceimage" />
				<p>
					Responsive Design Regardless of your website's goals or the audience
					that you are serving, your website will assuredly benefit from
					incorporating a web design that works across different screen sizes
					and on various devices.
				</p>
				<div className="btnBox">
					<div className="btn">
						<NavLink to="/about" className="readmore">
							Begin Learning{" "}
						</NavLink>
					</div>
				</div>
			</div>
		
		</>
	);
};

export default Combined;
