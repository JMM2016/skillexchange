// Include React as a dependency
import React from 'react';
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
import Link from 'react-router';
// var Link = require("react-router").Link;

// Create the Main component
export default class Main extends React.Component {

    render () {

        var needSearched = $('#needSearched').val()
        console.log(needSearched)

        return (
            <div>

                <div className="jumbotron">
                    <h2 className="text-center"><strong>Bartering is BACK!</strong></h2>
                    <h3 className="text-center">Money holds no sway</h3>
                </div>
                <Link to="Search" className="btn btn-danger">Search</Link>
                <Link to="User" className="btn btn-danger">Profile</Link>
                <Link to="Map" className="btn btn-danger">Map</Link>
                <p></p>
                {this.props.children}
            </div>

        )
    }
};
