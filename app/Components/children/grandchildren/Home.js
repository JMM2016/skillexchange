var React = require("react");

// import { browserHistory } from 'react-router'

var Home = React.createClass({
	getInitialState: function() {
		return {
			img:"./img/IMG_7880.JPG",
			message:"Home Message"
		};
	},

	handleChange: function (event) {
		const newState = {};
		newState[event.target.id] = event.target.value;
		this.setState(newState);
	},

	render: function() {
		return (
			<div className="logincontainer">
				<h1> THIS IS HOME</h1>
				<h4>
					<strong>Random Test</strong>
				</h4>
				<input
					type="text"
					value={this.state.message}
					id="text"
					onChange={this.handleChange}
					required />
				<img alt="HomeImg"src={this.props.img} width="100%"/>
			</div>
		);
	}
});

module.exports = Home;