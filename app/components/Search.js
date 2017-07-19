// Include React as a dependency
var React = require("react");

// Include the Query and Results components
var Query = require("./Search/Query");
var Results = require("./Search/Results");

// Include the helpers for making API calls
var helpers = require("../utils/helpers");

// Create the Search component
var Search = React.createClass({

  // Here we set the initial state variables
  // (this allows us to propagate the variables for maniuplation by the children components
  // Also note the "results" state. This will be where we hold the data from our results
  getInitialState: function() {
    return {
      results: {}
    };
  },

  // This function will be passed down into child components so they can change the "parent"
  // i.e we will pass this method to the query component that way it can change the main component
  // to perform a new search
  setQuery: function(newQuery) {
    helpers.needSearch(newQuery).then(function(data) {
      this.setState({ results: { docs: data } });
    }.bind(this));
    console.log("lala", data)
  },

  // Render the component. Note how we deploy both the Query and the Results Components
  render: function() {
    console.log("Render Results", this.state.results);

    return (
      <div className="main-container">

        {/* Note how we pass the setQuery function to enable Query to perform searches */}
        <Query updateSearch={this.setQuery} />
        {/* Note how we pass in the results into this component */}
        <Results results={this.state.results} />
      </div>
    );
  }
});

// Export the module back to the route
module.exports = Search;
