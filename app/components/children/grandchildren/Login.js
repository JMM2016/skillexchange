var React = require("react");

// import { browserHistory } from 'react-router'

var browserHistory = require("react-router").browserHistory;

var helpers = require("../../../utils/helpers");


var Login = React.createClass({

  getInitialState: function() {
    return {
      email: "",
      password: "",
      token: "",
      message: "Welcome Back!"
    }
  },

  getLogin: function(email, password) {
    helpers.login(email, password).then(function(data) {

      //Clear out the input fields
      this.setState({
        email: "",
        password: ""
      });
     
      var userId = data.data.id;
      var userToken = data.data.token;
      console.log("userToken", userToken);
      
      localStorage.setItem("userToken", userToken);
   
   

 
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
			<div className="logincontainer">
        <h1>{this.state.message}</h1>
        <div className="container">
          <form id="login" name="login" className="loginForm" onSubmit={this.handleSubmit}>
           
            <div className="row">
              <h2>Login</h2>
              <h2 id="invalidLogin"></h2>
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input 
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                placeholder="Email"
                value={this.state.email} 
                onChange={this.handleChangeEmail} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                className="form-control" 
                id="exampleInputPassword1" 
                placeholder="Password"
                value={this.state.password} 
                onChange={this.handleChangePassword} />
            </div>
            
            <button id="loginButton" type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>
			</div>
		);
	}
});

module.exports = Login;