var React = require("react");
import axios from 'axios';
import Message from "./Message/Message";
var browseHistory = require("react-router").browseHistory;
var helpers = require("../../../utils/helpers");


var Chat = React.createClass({

	getInitialState: function() {

		console.log('Chat this.props.params.id', this.props.params.id);
		console.log("profileToken", localStorage.getItem('userToken'));
		console.log("userName", localStorage.getItem('UserName'));

  		var userName = localStorage.getItem('UserName');
    	var userToken = localStorage.getItem('userToken');
    	// console.log("chatToken", userToken);
	
        axios.defaults.headers.common['Authorization'] = userToken;
 
		var chatProfileId = this.props.params.id;
		
		return {
			from: "",
			to: "",
			message_body: "",
			message: [],
			userName: ""
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

	componentDidMount: function() {
		//Get all the chat messages
		var sender = this.props.params.id;
		// var sender = localStorage.getItem('UserName');

		helpers.displayChat(sender).then(function(response) {
      		console.log("compoenentDidMount", response.data);
        	this.setState({ message: response.data });
    	}.bind(this));
	},


	handleSubmitMessage: function(event) {
		event.preventDefault();
		console.log("receiver", this.state.to);
		console.log("message", this.state.message_body);


		var sender = this.props.params.id
		var userName = localStorage.getItem('UserName');
		var receiver = this.state.to;
		var msg = this.state.message_body;
	
		helpers.postChat(sender, receiver, msg, userName).then(function(data) {
			
			this.setState({
				from: sender,
				to: receiver,
				message_body: msg,
				userName: userName
			});

			this.setState({
				to: "",
				message_body: ""
			})

			helpers.displayChat(sender).then(function(response) {
      			console.log("compoenentDidMount", response.data);
        		this.setState({ message: response.data });
    		}.bind(this));
		}.bind(this));
	},



	render: function() {

		return(
			<div className="container">
				<div className="row">
					<div className="col-md-6">


						<div className="panel panel-default">
							<div className="panel-heading">
								<h3 className="panel-title text-center">Send Message</h3>
							</div>
							<div className="panel-body text-center">
								<form name="chatBox" onSubmit={this.handleSubmitMessage}>
									<div className="form-group">
		                  				<input 
		                  					className="text" 
		                  					name="receiver" 
		                  					type="receiver" 
		                  					value={this.state.to} 
		                  					onChange={this.handleChangeReceiver} 
		                  					placeholder="Etner name or email"
		                  				/>
		                  				<br />
								
										<textarea 
											className="text" 
											name="message" 
											type="message" 
											value={this.state.message_body} 
											onChange={this.handleChangeMessage} 
											placeholder="Write message"
										/>
										<br />	
										<input type="submit" className="btn btn-default btn-primary" value="Send Message" />
									</div>
								</form>
							</div>		
						</div>





					</div>
					<div className="col-md-6">
						<Message message={this.state.message} />
					</div>
				</div>
			</div>
		);
	}

});

module.exports = Chat;