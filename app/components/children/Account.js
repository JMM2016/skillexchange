var React = require("react");
// Include the Helper (for the saved recall)
var helpers = require("../../utils/helpers");


var browserHistory = require("react-router").browserHistory;
var Link = require("react-router").Link;

var Account = React.createClass({

	

	render: function() {
		return (

			<div className="container">
        		<div className="row">
          			<Link to="/Account/Signup"><button className="btn btn-primary btn-lg">Sign Up</button></Link>
          			<Link to="/Account/Login"><button className="btn btn-danger btn-lg">Login</button></Link>
				</div>

        		{this.props.children}
        	
        	
             
			</div>

		);
	}
});

module.exports = Account;