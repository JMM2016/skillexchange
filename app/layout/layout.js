import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component{
	render() {
		return(
			<div>
				<div className="top-menu">
					<ul>
						<li>
							<Link to="#">Route1</Link>
						</li>
						<li>
							<Link to="#">Route2</Link>
						</li>
						<li>
							<Link to="#">Route3</Link>
						</li>
					</ul>
				</div>

				{this.props.children}
			</div>
		)
	}
}