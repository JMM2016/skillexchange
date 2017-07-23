var React = require("react");

var axios = require("axios");

var browseHistory = require("react-router").browseHistory;

var helpers = require("../../../utils/helpers");



var Chat = React.createClass({

	getInitialState: function() {

		// console.log('Chat this.props.params.id', this.props.params.id);
		// console.log("profileToken", localStorage.getItem('userToken'));
  
    	var userToken = localStorage.getItem('userToken');
    	console.log("chatToken", userToken);

    	let config = {'Authorization': userToken};
      	axios.post("api/chat", config)
      		.then((resp) => {
          		console.log("xxxxxx", resp);
      		});

		
		// var chatProfileId = this.props.params.id;

		return {
			from: "",
			to: "",
			message_body: ""
		};
	},


	handleChangeReceiver(data) {
		// console.log("receiver", data.target.value)
		this.setState({
			to: data.target.value
		});
	},

	handleChangeMessage(data) {
		// console.log("message", data.target.value)
		this.setState({
			message_body: data.target.value
		});
	},

	
	handleSubmit: function(event) {
		event.preventDefault();
		console.log("receiver", this.state.to);
		console.log("message", this.state.message_body);
		console.log("sender ID", this.props.params.id)

	
		
		var sender = this.props.params.id;
		var receiver = this.state.to;
		var msg = this.state.message_body;

		var newChat = {
			from: sender,
			to: receiver,
			message_body: msg
		};

		

		helpers.postChat(newChat).then(function(data){
			return console.log("new chat", data)
			console.log("new chat", data)
		
		}.bind(this));
	},



	render: function() {

		return(
			<div className="container">
				<div className="row">
					<hr/>
					<h2>Let's chat!</h2>
					<form name="chatBox" onSubmit={this.handleSubmit}>
						<div className="row">
							<div className="col-md-1">
								<label>To </label>
							</div>				
							<div className="col-md-11">
                  				<input className="text" name="receiver" type="receiver" value={this.state.to} onChange={this.handleChangeReceiver} />
                  			</div>
						</div>
						<div className="row">
							<div className="col-md-1">
								<label>Message</label>
							</div>
							<div className="col-md-11">
								<textarea className="text" name="message" type="message" value={this.state.message_body} onChange={this.handleChangeMessage} />
							</div>
						</div>
						<input type="submit" className="btn btn-default btn-primary" />
					</form>
				</div>
			</div>
		);
	}

});

module.exports = Chat;