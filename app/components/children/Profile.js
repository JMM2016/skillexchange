var React = require("react");
var helpers = require("../../utils/helpers");
var Link = require("react-router").Link;


var Profile = React.createClass({

  getInitialState: function() {
    return {
      firstName: "",
    }
  },



  componentDidMount: function() {
    // console.log('this.props.params.id', this.props.params.id)

    var profileId = this.props.params.id;
    // var profileToken = this.props;

    // console.log("profileToken", profileToken);

    helpers.verifyProfile(profileId).then(function(data) {
      
      // console.log("Profile didMount firstName", data.data.firstName);
      
      //I can get all the profile data back, including firstName
      var profileFirstName = data.data.firstName;
      var profileLastName = data.data.lastName;
      // var profileId = data

      this.setState({
        firstName: profileFirstName,
        lastName: profileLastName,

      });

      console.log("ffffff", this.state.firstName);

    }.bind(this));
  },

  handleLogout: function() {
    helpers.logout();
    console.log("Did you logout?")
  },





  render: function() {

    return (
        <div>
         <Link to="/"><button onClick={this.handleLogout} className="btn btn-danger btn-lg">Logout</button></Link>
         <hr/>
          <h2>Hello {this.state.firstName} {this.state.lastName}!</h2> 
          <hr/>
          <Link to={`/Profile/${this.props.params.id}/Chat`}><button  className="btn btn-primary btn-lg">Chat</button></Link>

          {this.props.children}
        </div>
    );
  }
});

// Export the module back to the route
module.exports = Profile;
