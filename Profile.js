import React from 'react';
import './Profile.css';

const Profile = (props) => {
	return (
		<div className="info">
			<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"/>
			<div className="sidebar">
				<img src={require("./img/LouisAvi.jpg")} alt="Louis"/>
				<h2>Louis Don Daza</h2>
				<h3>Full Stack Software Developer</h3>
				<h3>louisdaza@hotmail.com</h3>
				<ul>
					<li><a href="https://www.linkedin.com/in/louis-don-daza-2b710a147/"><i className="fab fa-linkedin"></i></a></li>
					<li><a href="https://github.com/LouisDonDaza"><i className="fab fa-github"></i></a></li>
					<li><a href="https://codepen.io/louisdjd"><i className="fab fa-codepen"></i></a></li>
				</ul>
			</div>
			<div className="title">
				<h1>Rising Software Developer</h1>
				<h2>Profile</h2>
				<div style={{background: "black", height:"3px", minWidth: "400px",boxShadow: "0 2px 4px cyan"}}></div>
				<p>Versatile Front-end Developer with knowledge in designing, developing, and 
				managing Web Applications written in Javascript or Python. Specializes in React 
				and responsive design.</p>
				<h2>Skills</h2>
				<div style={{background: "black", height:"3px", minWidth: "400px",boxShadow: "0 2px 4px cyan"}}></div>
				<div className="skills">
					<i className="fab fa-html5"></i>
					<div className="dropdown">
						<p>HTML 5</p>
					</div>
					<i className="fab fa-css3-alt"></i>
					<div className="dropdown">
						<p>CSS3</p>
					</div>
					<i className="fab fa-js"></i>
					<div className="dropdown">
						<p>Javascript</p>
					</div>
					<i className="fab fa-node"></i>
					<div className="dropdown">
						<p>{"Node.js"}</p>
					</div>
					<i className="fab fa-react"></i>
					<div className="dropdown">
						<p>React</p>
					</div>
					<i className="fab fa-python"></i>
					<div className="dropdown">
						<p>Python</p>
					</div>
					<i className="fab fa-java"></i>
					<div className="dropdown">
						<p>Java</p>
					</div>
					<i className="fab fa-git"></i>
					<div className="dropdown">
						<p>Github</p>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Profile;