var React = require("react");
import axios from 'axios';
import Message from "./Message/Message";
var browseHistory = require("react-router").browseHistory;
var helpers = require("../../../utils/helpers");


var Chat = React.createClass({

	getInitialState: function() {

		console.log('Chat this.props.params.id', this.props.params.id);
		console.log("profileToken", localStorage.getItem('userToken'));
  
    	var userToken = localStorage.getItem('userToken');
    	console.log("chatToken", userToken);
	
        axios.defaults.headers.common['Authorization'] = userToken;
 
		var chatProfileId = this.props.params.id;

		return {
			from: "",
			to: "",
			message_body: ""
		};
	},


	handleChangeReceiver(data) {
		console.log("receiver", data.target.value)
		this.setState({
			to: data.target.value
		});
	},

	handleChangeMessage(data) {
		console.log("message", data.target.value)
		this.setState({
			message_body: data.target.value
		});
	},

	handleSubmitMessage: function(event) {
		event.preventDefault();
		console.log("receiver", this.state.to);
		console.log("message", this.state.message_body);

		var sender = this.props.params.id
		console.log("postChat sender", this.props.params.id)
		var receiver = this.state.to;
		var msg = this.state.message_body;
		
		// debugger 
		helpers.postChat(sender, receiver, msg).then(function(data) {
			
			this.setState({
				from: sender,
				to: receiver,
				message_body: msg
			})

		}.bind(this));
	},



	render: function() {

		return(
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<form name="chatBox" onSubmit={this.handleSubmitMessage}>
							<div className="row">
								<div className="col-md-2">
									<label>To </label>
								</div>				
								<div className="col-md-10">
	                  				<input className="text" name="receiver" type="receiver" value={this.state.to} onChange={this.handleChangeReceiver} />
	                  			</div>
							</div>
							<div className="row">
								<div className="col-md-2">
									<label>Message</label>
								</div>
								<div className="col-md-10">
									<textarea className="text" name="message" type="message" value={this.state.message_body} onChange={this.handleChangeMessage} />
								</div>
							</div>
							<input type="submit" className="btn btn-default btn-primary" value="Send Message" />
						</form>
					</div>
					<div className="col-md-6">
					
					</div>
				</div>
			</div>
		);
	}

});

module.exports = Chat;