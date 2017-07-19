// Include React as a dependency
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
var Link = require("react-router").Link;

// import Results from "./Search/Results"

// Create the Main component
var Main = React.createClass({

    render: function () {

        // var needSearched = $('#needSearched').val()
        // console.log(needSearched)

        return (
            <div className="container">
                <div className="jumbotron">
                    <h2><strong>Skill Exchange</strong></h2>
                    <p><em></em></p>
                    <hr />
                    <p>
                        <Link to="/Signup"><button className="btn btn-primary btn-lg">Sign Up</button></Link>
                        <Link to="/Login"><button className="btn btn-danger btn-lg">Login</button></Link>
                        <Link to="/Profile"><button className="btn btn-success btn-lg">Profile</button></Link>
                    </p>
                </div>
                <div className="row">

                  {/* This code will dump the correct Child Component */}
                  {this.props.children}
                </div>
            </div>
        );
    }
});

// Export the module back to the route
module.exports = Main;
