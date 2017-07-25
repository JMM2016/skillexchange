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
          
      <div className="container-fluid">

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