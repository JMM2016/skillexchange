// Include React as a dependency
var React = require("react");

// Include the Helper (for the saved recall)
var helpers = require("../../utils/helpers");

// Create the Main component
var Profile = React.createClass({



  componentDidMount: function() {
    console.log('this.props.params.id', this.props.params.id)

    var profileId = this.props.params.id;

    //helper verify User -> axios call -> request to server
    helpers.verifyProfile(profileId).then(function(data) {
      console.log(data);
    });
  },
  
  // Our render method. Utilizing a few helper methods to keep this logic clean
  render: function() {
    // If we have no articles, we will return this.renderEmpty() which in turn returns some HTML
    return (
      <div>
        <p>fuck you</p>
      </div>
  )}
});

// Export the module back to the route
module.exports = Profile;
