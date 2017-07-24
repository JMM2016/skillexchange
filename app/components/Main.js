// Include React as a dependency
import React from 'react';
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
// import Link from 'react-router';
import { Link } from 'react-router'

// Create the Main component
export default React.createClass({

  render() {

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
              <h2 className="navbar-text" style={{color: "#009f9b", fontWeight: "bold"}}> Skillshare</h2>

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

        <div className="page-header titlearea text-center">
          <h1>Bartering is back!</h1>
          <br />
          <p>Money holds no sway</p>
        </div>

        <div className="container">
        {this.props.children} 
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
});