// Include React as a dependency
var React = require("react");

// Include the Query and Results components
var Query = require("./Search/Query");
var Results = require("./Search/Results");

// Include the helpers for making API calls
var helpers = require("../utils/helpers");
var geocodeHelper = require("../utils/geocodeHelper");

// Create the Search component
var Search = React.createClass({

    getInitialState: function () {
        return {
            need_results: {},
            have_results: {},
            need_query: "",
            have_query: ""
        };
    },

    google: function() {
        // If we have a new search term, run a new search

            helpers.findUser("5973a044fd0514115903e06c").then(function(results){

                var address = results.data.street + " " + results.data.city + " " + results.data.state;
                console.log(address, "ADDRESS");

                geocodeHelper.runQuery(address).then(function(data) {
                    // if (data !== this.state.results) {
                        console.log("it worked!", data);
                        // this.setState({ results: data });
                    })
                    // This code is necessary to bind the keyword "this" when we say this.setState
                    // to actually mean the component itself and not the runQuery function.
                }.bind(this));
    },

    setQuery: function (newQuery, isNeed) {
        if(isNeed) {
            helpers.needSearch(newQuery).then(function (data) {
                this.setState({need_query: newQuery});
                this.setState({need_results: {docs: data}});
            }.bind(this));
        } else {
            helpers.haveSearch(newQuery).then(function (data) {
                this.setState({have_query: newQuery});
                this.setState({have_results: {docs: data}});
            }.bind(this));
        }
    },

    // Render the component. Note how we deploy both the Query and the Results Components
    render: function () {
        console.log("COMPONENT RENDERED");

        return (
            <div className="main-container">
                <div><button onClick={this.google}>google</button></div>
                {/* Note how we pass the setQuery function to enable Query to perform searches */}
                <Query updateQuery={this.setQuery} />
                {/* Note how we pass in the results into this component */}
                <Results need_results={this.state.need_results} have_results={this.state.have_results} need_query={this.state.need_query} have_query={this.state.have_query}/>
            </div>
        );
    }
});

// Export the module back to the route
module.exports = Search;
