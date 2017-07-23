var React = require("react");

var browseHistory = require("react-router").browseHistory;

var helpers = require("../../../utils/helpers");

var Chat = React.createClass({

	getInitialState: function() {

		console.log('Chat this.props.params.id', this.props.params.id);
		console.log("profileToken", localStorage.getItem('userToken'));
  
    	var userToken = localStorage.getItem('userToken');
    	console.log("chatToken", userToken);
		
		var chatProfileId = this.props.params.id;

		return {
			from: chatProfileId,
			to: "",
			message_body: ""
		};
	},

	sendAuth: function() {

		console.log("profileToken", localStorage.getItem('userToken'));
  
    	var userToken = localStorage.getItem('userToken');
    	console.log("chatToken", userToken)

		let config = {"Authorization": userToken}

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

	handleSubmitMessage: function(sender, receiver, msg) {
		event.preventDefault();
		console.log("receiver", this.state.receiver);
		console.log("message", this.state.message);

		var sender = this.props.firstName;
		console.log("message sender", sender)
		var receiver = this.state.receiver;
		var msg = this.state.message
		debugger
		helpers.postChat(sender, receiver, msg).then(function(data) {
			
			return console.log("submitMessage", data)

		}.bind(this));
	},



	render: function() {

		return(
			<div className="container">
				<div className="row">
					<hr/>
					<h2>Let's chat!</h2>
					<form name="chatBox" onSubmit={this.handleSubmitMessage}>
						<div className="row">
							<div className="col-md-1">
								<label>To </label>
							</div>				
							<div className="col-md-11">
                  				<input className="text" name="receiver" type="receiver" value={this.state.receiver} onChange={this.handleChangeReceiver} />
                  			</div>
						</div>
						<div className="row">
							<div className="col-md-1">
								<label>Message</label>
							</div>
							<div className="col-md-11">
								<textarea className="text" name="message" type="message" value={this.state.message} onChange={this.handleChangeMessage} />
							</div>
						</div>
						<input type="submit" className="btn btn-default btn-primary" value="Send Message" />
					</form>
				</div>
			</div>
		);
	}

});

module.exports = Chat;