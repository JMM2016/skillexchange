import React from 'react';
// import ReactDOM from 'react-dom';
import NavLink from './NavLink';


export default class Home extends React.Component {
	render () {
		return (
			<div className="container">
				<h1 className="jumbotron">this is the home page!</h1>
				<h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><NavLink to="/login">LogIn</NavLink></li>
          <li><NavLink to="/main">Main</NavLink></li>
        </ul>
        {this.props.children}
			</div>
		)
	}
}
