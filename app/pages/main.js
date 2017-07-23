import React from 'react';
// import ReactDOM from 'react-dom';
import NavLink from './NavLink';


export default class Main extends React.Component {
	render () {
		return (
			<div>
				<h1 className="jumbotron">this is the main (aka. ABOUT) page!</h1>
      	<ul role="nav">
          <li><NavLink to="/login">LogIn</NavLink></li>
          <li><NavLink to="/home">Home</NavLink></li>
        </ul>
        {this.props.children}
			</div>
            
		)
	}
}

