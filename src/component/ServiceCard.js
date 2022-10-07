import React from "react";
import ImageHome from "./service.jpg";
import { NavLink } from "react-router-dom";

const Combined = () => {
	return (
		<>
			<div className="card">
				<h2>Best in Class to field Basketball training</h2>
				<img src={ImageHome} alt="solution1" className="serviceimage" />
				<p>
				Training · Shooting · Ball Handling · Offensive Moves (for Guards and Post Players) · Footwork · Rebounding · Defense · Speed and Strength Development.
				</p>
				<p>Group sessions that provide personalised training to improve technique and abilities.
The training sessions at Team Sports Services (Team Basketball Academy) are tailored to different ages (ages 4 to 18) and different levels (Beginner to Intermediate B) of kids’ knowledge. The focus each training program is on fundamental skill acquisition and players progress through our unique format to integrate these skills into game knowledge incorporating strategic and tactical training.</p>
				<div className="btnBox">
					<div className="btn">
						<NavLink to="/about" className="readmore">
							Let's Hoop{" "}
						</NavLink>
					</div>
				</div>
			</div>
		
		</>
	);
};

export default Combined;
