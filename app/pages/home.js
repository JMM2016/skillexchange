import React from 'react';
// import ReactDOM from 'react-dom';
import NavLink from './NavLink';
var Link = require("react-router").Link;



export default class Home extends React.Component {

	render () {
		return (
			<div className="container-fluid">
				<h1 className="jumbotron">SkillShare</h1>
				<div className="row">
					<div className="col-md-10">
						<h1 className= "mainScreen"> PIC GOES HERE</h1>
						<img src="./img/friend.png" />
					</div>
				</div>
			</div>
		)
	}
}
