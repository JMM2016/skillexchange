// Include React as a dependency
import React from 'react';
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
// import Link from 'react-router';
import { Link } from 'react-router'

// var Link = require("react-router").Link;

// Create the Main component
export default React.createClass({

    render() {

        return (
            <div>

                <div className="jumbotron">
                    <h2 className="text-center"><strong>Bartering is BACK!</strong></h2>
                    <h3 className="text-center">Money holds no sway</h3>
                </div>

                    <Link to="/search" className="btn btn-danger">Search</Link>
                    <Link to="/user" className="btn btn-danger">Profile</Link>
                    <Link to="/map" className="btn btn-danger">Map</Link>

                <p></p>
                {this.props.children}
            </div>
        )
    }
});
