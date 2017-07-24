var React = require("react");
import axios from 'axios';

var browseHistory = require("react-router").browseHistory;

var helpers = require("../../../../utils/helpers");

var Message = React.createClass({

	


	render: function() {

		return(
			<div className="container">
				<h4>Hello World</h4>
			</div>
		);
	}

});

module.exports = Message;