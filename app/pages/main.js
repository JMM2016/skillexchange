import React from 'react';
// import ReactDOM from 'react-dom';
// import NavLink from './NavLink';
const Link = require("react-router").Link;

// import ControlledCarousel from '../Components/CarouselControlled'


export default class Main extends React.Component {

	componentDidMount() {
    $('[data-toggle="tooltip"]').tooltip();
  }

	render () {

  const now = new Date();

		return (
			<div>

			 <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapsed-navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">
                <img className="brandImg img-responsive" src="./img/friend.png" alt="Brand" />
              </a>
              <h2 className="navbar-text" style={{color: "#009f9b", fontWeight: "bold"}}> Welome</h2>

            </div>

            <div id="collapsed-navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li id="navbar-links"><Link to="/login">Log In</Link></li>
                <li id="navbar-links"><Link to="/Home">Home</Link></li>                
              </ul>
            </div>
          </div>
        </nav>

        <div className="container-fluid">

        <p className="page-header"> Current time: {now.toTimeString()} </p>
        {this.props.children}

        </div>

        <footer>
          <div id="footer">

            <div className="container-fluid transbox">

              <div className="row text-center">
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <h4> Mission Statement</h4>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <h4> About Us</h4>
                </div>  
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <h4> Coming Soon!</h4>
                </div>    
              </div>

              <div className="row">
                <div className="col-md-6 col-md-offset-3 text-center">
                  <p>
                    Copyright 2017 LSD-Riders &mdash; All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>  
          </div>
        </footer> 


			</div>
		)
	}
}

