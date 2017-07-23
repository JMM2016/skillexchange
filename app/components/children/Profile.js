var React = require("react");
var helpers = require("../../utils/helpers");
var Link = require("react-router").Link;


var Profile = React.createClass({

  getInitialState: function() {

    // console.log("profileToken", localStorage.getItem('userToken'));

    return {
      firstName: "",
    }
  },


  componentDidMount: function() {
    // console.log('this.props.params.id', this.props.params.id)

    var profileId = this.props.params.id;

    helpers.verifyProfile(profileId).then(function(data) {

      var userToken = localStorage.getItem('userToken');

      //I can get all the profile data back, including firstName
      var profileFirstName = data.data.firstName;
      var profileLastName = data.data.lastName;
      var profileUserName = data.data.userName;
      console.log("ffffff", this.state.userName);

      this.setState({
        firstName: profileFirstName,
        lastName: profileLastName,
        userName: profileUserName,
        token: userToken

      });

   

    }.bind(this));


  },

  handleLogout: function() {
    helpers.logout();
    console.log("Did you logout?")
  },


  render: function() {

    return (
        <div>
          
          <Link to={`/Profile/${this.props.params.id}/Search`}><button className="btn btn-primary">Search</button></Link>
          <Link to={`/Profile/${this.props.params.id}/User`}><button className="btn btn-success">Profile</button></Link>
          <Link to={`/Profile/${this.props.params.id}/Map`}><button className="btn btn-info">Map</button></Link>
          <Link to={`/Profile/${this.props.params.id}/Chat`}><button  className="btn btn-warning">Chat</button></Link>
          <Link><button className="btn btn-default">Contract</button></Link>
          <Link to="/"><button onClick={this.handleLogout} className="btn btn-danger">Logout</button></Link>
            
          <hr/>
          <h2>Hello {this.state.userName}!</h2> 
          <hr/>
          {this.props.children}
         
          

          

          
        </div>
    );
  }
});

// Export the module back to the route
module.exports = Profile;
