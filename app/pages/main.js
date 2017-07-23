import React from 'react';
// import ReactDOM from 'react-dom';
import NavLink from './NavLink';
const Link = require("react-router").Link;

import ControlledCarousel from '../Components/CarouselControlled'


export default class Main extends React.Component {

	componentDidMount() {
    $('[data-toggle="tooltip"]').tooltip();
  }

	render () {
		return (
			<div>

			 <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#" style={{color: "#009f9b", fontWeight: "bold"}}>Welcome</a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li id="navbar-links"><Link to="/login">Log In</Link></li>
                <li id="navbar-links"><Link to="/Home">Home</Link></li>                
              </ul>
            </div>
          </div>
        </nav>
        <ControlledCarousel />
        {this.props.children}
			</div>

		)
	}
}

