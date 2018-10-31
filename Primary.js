import React, {Component} from 'react';
import Greeting from './Greeting';
import Profile from './Profile';
import App from './Containers/App';
import Project1 from './Components/Project1';
import './Primary.css';

const Footr = () => {
	return (
		<div>
			<footer className="main-footer">
				<p>Copyright &copy; 2018 My Website</p>
			</footer>
		</div>
	);
}
class Primary extends Component {
	render(){
		return(
			<div>
				<Greeting/>
				<Profile/>
				<App/>
				<Project1/>
				<Footr/>
			</div>
		);
	}
}

export default Primary;