import React from 'react';
// import ReactDOM from 'react-dom';
// import NavLink from './NavLink';
var Link = require("react-router").Link;


export default class Home extends React.Component {

	render () {
		return (
			<div>
				<nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
              	<img className="brandImg img-responsive" src="./img/friend.png" alt="Brand" />
              </a>
              <h2 className="navbar-text"> SKILLSHARE</h2>
              <ul className="navbar-right">
	              <button type="button" className="btn btn-default navbar-btn">Sign Up</button>
	              <p className="navbar-text"><a href="#" className="navbar-link">Sign In</a></p>
            	</ul>
            </div>
          </div>
        </nav>

			<div className="container-fluid">

				<div className="page-header titlearea text-center">
					<h1>SkillShare</h1>
					<br />
					<p>Catchy phrase here</p>
				</div>
					<div className="container">
						<div className="row photoArea">
							<div className="col-md-10 col-md-offset-1">
								<img className="img-responsive"src="./img/placeholder.png" />
							</div>
						</div>
					</div>

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
