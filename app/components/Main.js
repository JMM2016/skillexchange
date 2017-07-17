// Include React as a dependency
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
var Link = require("react-router").Link;

import Results from "./Search/Results"

// Create the Main component
var Main = React.createClass({

    render: function () {

        var needSearched = $('#needSearched').val()
        console.log(needSearched)

        return (
            <div>
                <div className="jumbotron">
                    <h2 className="text-center"><strong>Bartering is BACK!</strong></h2>
                    <h3 className="text-center">Money holds no sway</h3>
                </div>
                {this.props.children}
                <Link to="search" className="btn btn-danger">Search</Link>
                <Link to="saved" className="btn btn-danger">Saved</Link>

                <form action="/api/user" method="post">
                    {/*<label>*/}
                        {/*Name:*/}
                        <input type="text" name="firstName" placeholder="first name"/>
                        <input type="text" name="skills" placeholder="skills"/>
                        <input type="text" name="needs" placeholder="needs"/>
                    {/*</label>*/}
                    <input type="submit" value="Submit"/>
                </form>
                <br/>
                <form>
                    <input id="needSearched" type="text" name="user_need" placeholder="needs search"/>
                    <input type="submit"/>
                </form>
                <br/>
                <form action="/api/user/needs/{{user_need}}" method="get">
                    <input type="text" name="skills" placeholder="skills search"/>
                    <input type="submit"/>
                </form>

            </div>
        )
    }
});

// Export the module back to the route
module.exports = Main;
