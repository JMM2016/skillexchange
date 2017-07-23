var React = require("react");
var helpers = require("../../utils/helpers");
var Link = require("react-router").Link;


var Profile = React.createClass({

  

  render: function() {

    return (
            <div>

                    <Link to={`/Profile/${this.props.params.id}/Search`} className="btn btn-danger">Search</Link>
                    <Link to={`/Profile/${this.props.params.id}/User`} className="btn btn-danger">Profile</Link>
                  

                <p></p>
                {this.props.children}
            </div>
        )
  }
});

// Export the module back to the route
module.exports = Profile;
