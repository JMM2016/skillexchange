var React = require("react");
var helpers = require("../../utils/helpers");
var Link = require("react-router").Link;


var Profile = React.createClass({

  getInitialState: function() {

    // console.log("profileToken", localStorage.getItem('userToken'));

    return {
      userName: "",
    }
  },


  componentDidMount: function() {
    // console.log('this.props.params.id', this.props.params.id)

    var profileId = this.props.params.id;

    helpers.verifyProfile(profileId).then(function(data) {

      var userToken = localStorage.getItem('userToken');
      console.log("Profile Mount data", data)

      //I can get all the profile data back, including firstName
      var profileFirstName = data.data.firstName;
      var profileLastName = data.data.lastName;
      var profileUserName = data.data.userName;
      console.log("ffffff", data.data.userName);
      var profileEmail = data.data.email;

      localStorage.setItem("UserName", profileUserName);
      localStorage.setItem("Email", profileEmail);
      localStorage.setItem("Id", this.props.params.id);

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
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapsed-navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">
                <img className="brandImg img-responsive" src="./../img/friend.png" alt="Brand" />
              </a>
              <h2 className="navbar-text" style={{color: "#009f9b", fontWeight: "bold"}}> Skillzshare</h2>
            </div>
            <div id="collapsed-navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li id="navbar-links">
                  <Link to={`/Profile/${this.props.params.id}/User`}>Profile</Link>
                </li>
                <li id="navbar-links">
                  <Link to={`/Profile/${this.props.params.id}/Search`}>Search</Link>
                </li>
                <li id="navbar-links">
                  <Link to={`/Profile/${this.props.params.id}/Map`}>Map</Link>
                </li>
                <li id="navbar-links">
                  <Link to={`/Profile/${this.props.params.id}/Chat`}>Chat</Link>
                </li>
                <li id="navbar-links">
                  <Link to={`/Profile/${this.props.params.id}/Contract`}>Contract</Link>
                </li>
                <li id="navbar-links">
                  <Link>Rate</Link>
                </li>
                <button  onClick={this.handleLogout} type="button" className="btn btn-default navbar-btn logout-btn">
                  <Link to="/">Logout</Link>
                </button> 
              </ul>
            </div>
          </div>
        </nav>
 
        <div className="container-fluid">

          <div className="page-header titlearea text-center">
            <p>Just testing CSS settings still work. Delete this P tag l8r!</p>
          </div>
          <hr/>
          <h2>Hello {this.state.userName}!</h2> 
          <hr/>
          {this.props.children}
        </div>
     
      </div>
    );
  }
});

// Export the module back to the route
module.exports = Profile;
