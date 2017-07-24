var React = require("react");
// Include the Helper (for the saved recall)
var helpers = require("../../utils/helpers");


var browserHistory = require("react-router").browserHistory;
var Link = require("react-router").Link;

var Account = React.createClass({

	

	render: function() {
		return (

			<div className="container">

        		{this.props.children}

			</div>

		);
	}
});

module.exports = Account;