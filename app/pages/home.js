import React from 'react';
// import ReactDOM from 'react-dom';
import NavLink from './NavLink';
var Link = require("react-router").Link;



export default class Home extends React.Component {

	render () {
		return (
			<div className="container">
				<h1 className="jumbotron">We're in the HOME page</h1>
			</div>
		)
	}
}
