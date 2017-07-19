var React = require("react");
// Include the Helper (for the saved recall)
var helpers = require("../../utils/helpers");

var Signup = React.createClass({

	
  getInitialState: function () {
    return {
        email: "",
        password: ""
    };
  },

  setSignUp: function(email, password) {

    helpers.signUp(email, password).then(function(data) {
      console.log("getSignUp: ", data.data)
      this.setState({
        email: data.email,
        password: data.password
      });
      alert(data.data.message);
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


  handleSubmit: function (event) {
        event.preventDefault();
        console.log("email submitted", this.state.email);
        console.log("password submitted", this.state.password);
        
        var email = this.state.email;
        var password = this.state.password;

        this.setSignUp(email, password);

  },

	render: function() {
		return (

			<div className="container">
				<form id="signup" name="signup" onSubmit={this.handleSubmit} >
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