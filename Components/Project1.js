import React from 'react';
import './Project1.css';
const title = "3D Modeler";
const Project1 = () => {
	return (
		<div className ="uno" style={{backgroundColor: "#111"}}>
			<h2>Other Websites Made For Professionals</h2> 
			<ul>
				<li>
					<a href="#">
						<img src={require("../img/ArrisProfile.jpg")} alt="Arris"/>
					</a>
					<p>Photographer</p>
				</li>
				<li>
					<a href="#" >
						<img src={require("../img/Brandon.jpg")} alt="Brandon"/>
					</a>
					<p>{title}</p>
				</li>
				<li>
					<a href="#">
						<img src={require("../img/David.jpg")} alt="David"/>
					</a>
					<p>Animator</p>
				</li>
			</ul>
		</div>
	);
}
export default Project1;