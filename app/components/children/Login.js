var React = require("react");

var helpers = require("../../utils/helpers");


var Login = React.createClass({

  getInitialState: function() {
    return {
      email: "",
      password: ""
    }
  },

  getLogin: function(email, password) {

    helpers.login(email, password).then(function(data) {
      console.log("getLogin: ", data.data)

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

        this.getLogin(email, password);

  },


	render: function() {
		return (
			<div className="container">
				<form id="login" name="login" onSubmit={this.handleSubmit}>
                <div className="row">
                    <h2>Login</h2>
                    <h2 id="invalidLogin"></h2>
                  
                </div>

                <div className="row">
                  <label>Email Address </label>
                  <input className="text" name="email" type="email" value={this.state.email} onChange={this.handleChangeEmail}/>
                </div>
                <div className="row">
                    <label>Password </label>
                    <input name="password" type="password" className="text" value={this.state.password} onChange={this.handleChangePassword}/>
                </div>
               
  
                <div className="row">
                  <input id="loginButton" className="btn" type="submit"/>
                </div>
              </form>
			</div>
		);
	}
});

module.exports = Login;