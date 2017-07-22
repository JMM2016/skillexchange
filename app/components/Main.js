// Include React as a dependency
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
var Link = require("react-router").Link;


// Create the Main component
var Main = React.createClass({

  

    render: function () {

        // var needSearched = $('#needSearched').val()
        // console.log(needSearched)

        return (
            <div className="container">
                <div className="jumbotron">
                    <h2 className="text-center"><strong>Bartering is BACK!</strong></h2>
                    <h3 className="text-center">Money holds no sway</h3>
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
