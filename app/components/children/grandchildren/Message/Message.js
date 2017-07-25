var React = require("react");
import axios from 'axios';

var browseHistory = require("react-router").browseHistory;

var helpers = require("../../../../utils/helpers");

var Message = React.createClass({

	


	render: function() {

		return (
      		<div className="panel panel-default">
        		<div className="panel-heading">
          			<h3 className="panel-title text-center">Messages</h3>
        		</div>
        		<div className="panel-body text-center">
        			<div className="row">
        				<div className="col-md-3">
        					<label>To</label>
        					{/* Here we use a map function to loop through an array in JSX */}
          					{this.props.message.map(function(search, j) {
                      
            					return (
              						<p key={j}>{search.to}</p>
            					);
          					})}
        				</div>
        				<div className="col-md-9">
        					<label>Message</label>
        					{/* Here we use a map function to loop through an array in JSX */}
          					{this.props.message.map(function(search, i) {
            					return (
              						<p key={i}>{search.message_body}</p>
            					);
          					})}
        				</div>
        			</div>

          			
        		</div>
      		</div>
    	);
	}

});

module.exports = Message;