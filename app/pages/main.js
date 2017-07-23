import React from 'react';
import ReactDOM from 'react-dom';

export default class Main extends React.Component {
	render () {
		return (
			<div>
				<h1 className="jumbotron">this is the main page!</h1>
                <Link to="Search" className="btn btn-primary">Search</Link>
                <Link to="User" className="btn btn-danger">Profile</Link>
                {this.props.children}
			</div>
            
		)
	}
}

