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
        lastName: "",
        message: "Welcome!",
    };
  },

  setSignUp: function(email, password, firstName, lastName, userName) {

    helpers.signUp(email, password, firstName, lastName, userName ).then(function(data) {
      console.log("getSignUp: ", data.data)

      this.setState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        userName: ""
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

  handleChangeUserName(data) {
    // console.log("handleChangePassword", data.target.value)
    this.setState({userName: data.target.value});
  },


  handleSignUp: function (event) {
        event.preventDefault();
        console.log("email submitted", this.state.email);
        console.log("password submitted", this.state.password);
        console.log("firstName submitted", this.state.firstName);
        console.log("lastName submitted", this.state.lastName);
        console.log("userName submitted", this.state.userName);
        
        var email = this.state.email;
        var password = this.state.password;
        var firstName = this.state.firstName;
        var lastName = this.state.lastName;
        var userName = this.state.userName;

        this.setSignUp(email, password, firstName, lastName, userName);

  },

	render: function() {
		return (
			<div className="signupcontainer inline-block">
        <h1>{this.state.message}</h1>
        <div className="container">
				  <form id="signup" name="signup" className="signupForm"onSubmit={this.handleSignUp} >
              <div className="form-group">
                  <h2>Sign Up</h2>
                  <h2 id="invalidSignup"></h2>
                  <h6>* Require Entries</h6>
              </div>
             
              <div className="form-group">
                <label>Email address*</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="exampleInputEmail1" 
                  placeholder="Email"
                  value={this.state.email} 
                  onChange={this.handleChangeEmail} />
              </div>

              <div className="form-group">
                  <label>First Name*</label>
                  <input 
                    className="text form-control" 
                    name="firstName" 
                    type="firstName" 
                    value={this.state.firstName} 
                    onChange={this.handleChangeFirstName} />
                </div>

                <div className="form-group">
                  <label>Last Name *</label>
                  <input 
                    className="text form-control" 
                    name="lastName" 
                    type="lastName" 
                    value={this.state.lastName} 
                    onChange={this.handleChangeLastName} />
                </div>

                <div className="form-group">
                    <label>Username *</label>
                    <input 
                      name="userName" 
                      type="userName" 
                      className="text form-control" 
                      value={this.state.userName} 
                      onChange={this.handleChangeUserName} />
                </div>

              <div className="form-group">
                <label>Password*</label>
                <input 
                type="password" 
                className="form-control" 
                id="exampleInputPassword1" 
                placeholder="Password"
                value={this.state.password} 
                onChange={this.handleChangePassword} />
              </div>
            
              <button id="signupButton" type="submit" className="btn btn-default">Submit</button>
            </form>
        </div>
			</div>
		);
	}
});

module.exports = Signup;