// Include React as a dependency
var React = require("react");

// Include the Helper (for the saved recall)
var helpers = require("../utils/helpers");

// Create the Main component
var User = React.createClass({

    getInitialState: function () {
        return {savedArticles: ""};
    },

    // Our render method. Utilizing a few helper methods to keep this logic clean
    render: function () {
        return (
            <div>
                <form action="/api/user" method="post">
                    {/*<label>*/}
                    {/*Name:*/}
                    <input type="text" name="firstName" placeholder="first name"/>
                    <input type="text" name="skills" placeholder="skills"/>
                    <input type="text" name="needs" placeholder="needs"/>
                    {/*</label>*/}
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
});
// Export the module back to the route
module.exports = User;
