import React, {Component} from 'react';
import CardList from '../Components/CardList'
import {robots} from '../robots';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css';

const DemoBox = (props) => {
		const {show} = props;
		return (
			<div style={{display: show ? "block":"none"}}>
				{props.children}
			</div>
		);
	}
const DemoButton = ({onClick}) => {
		return (
			<button className="pa3 br3 ba bw1 b--purple bg-dark-blue"onClick={onClick} style={{color:"snow"}}>Demo</button>
		);
	}
class App extends Component {
	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield: '',
			flip: false,
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users=> this.setState({ robots: robots})
		);
	}
	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}
	toggleDisplay = () => {
		this.setState({flip: !this.state.flip} )
	}
	render(){
		const {robots, searchfield} = this.state;
		const filteredRobots = robots.filter(robot=>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		if(!robots.length){
			return <h1 className="tc f1">Loading</h1>
		}
		return (
			<div className="robo tc">
				<h1 className="f1">RoboFriends</h1>
				<DemoButton onClick={this.toggleDisplay}/>
				<DemoBox show={this.state.flip}>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>
				</DemoBox>
			</div>
	);}
}
export default App;