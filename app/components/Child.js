const React = require("react");


const Child = React.createClass({

	getInitialState: function() {
		return {
			number: 0
		};
	},

	handleClick: function() {

		var newNumber = this.state.number + 2;

		this.setState({
			number: newNumber
		});
		this.props.setParent(newNumber);
	},

	resetClick: function() {
		this.setState({
			number: 0
		});
		this.props.setParent(0);
	},

	render: function() {
		return (

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title">Child</h3>
				</div>
				<div className="panel-body text-center">
					<p>
						<button className="btn btn-primary btn-lg" onClick={this.handleClick}>Click Me!</button>
						<button className="btn btn-danger btn-lg" onClick={this.resetClick}>Reset</button>
					</p>
				</div>
			</div>
		);
	}
});

module.exports = Child;