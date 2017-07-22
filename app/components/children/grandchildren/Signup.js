var React = require("react");
// Include the Helper (for the saved recall)
var helpers = require("../../../utils/helpers");

var browserHistory = require("react-router").browserHistory;

var Signup = React.createClass({

	
  getInitialState: function () {
    return {
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    };
  },

  setSignUp: function(email, password, firstName, lastName) {

    helpers.signUp(email, password, firstName, lastName).then(function(data) {
      console.log("getSignUp: ", data.data)

      this.setState({
        email: "",
        password: "",
        firstName: "",
        lastName: ""
      });
      
      var userId = data.data.id;

      if(data.data.success === true) {

        browserHistory.push(`/Profile/${userId}`);
      } else {
        alert(data.data.message)
      };
      
    }.bind(this));
  },

  
  handleChangeEmail(data) {
    // console.log("handleChangeEmail", data.target.value)
    this.setState({email: data.target.value});
  },

  handleChangePassword(data) {
    // console.log("handleChangePassword", data.target.value)
    this.setState({password: data.target.value});
  },

  handleChangeFirstName(data) {
    // console.log("handleChangePassword", data.target.value)
    this.setState({firstName: data.target.value});
  },

  handleChangeLastName(data) {
    // console.log("handleChangePassword", data.target.value)
    this.setState({lastName: data.target.value});
  },


  handleSignUp: function (event) {
        event.preventDefault();
        console.log("email submitted", this.state.email);
        console.log("password submitted", this.state.password);
        console.log("firstName submitted", this.state.firstName);
        console.log("lastName submitted", this.state.lastName);
        
        var email = this.state.email;
        var password = this.state.password;
        var firstName = this.state.firstName;
        var lastName = this.state.lastName;

        this.setSignUp(email, password, firstName, lastName);

  },

	render: function() {
		return (

			<div className="container">

				<form id="signup" name="signup" onSubmit={this.handleSignUp} >
                <div className="row">
                    <h2>Sign Up</h2>
                    <h2 id="invalidSignup"></h2>
                    <h6>* Require Entries</h6>
                </div>
                <div className="row">
                  <label>Email Address *</label>
                  <input className="text" name="email" type="email" value={this.state.email} onChange={this.handleChangeEmail} />
                </div>
                <div className="row">
                  <label>First Name *</label>
                  <input className="text" name="firstName" type="firstName" value={this.state.firstName} onChange={this.handleChangeFirstName} />
                </div>
                <div className="row">
                  <label>Last Name *</label>
                  <input className="text" name="lastName" type="lastName" value={this.state.lastName} onChange={this.handleChangeLastName} />
                </div>
                <div className="row">
                    <label>Password *</label>
                    <input name="password" type="password" className="text" value={this.state.password} onChange={this.handleChangePassword} />
                </div>
                <div className="row">
                  <button id="signupButton" className="btn" type="submit" >Submit</button>
                </div>
              </form>
              {this.props.children}
			</div>

		);
	}
});

module.exports = Signup;