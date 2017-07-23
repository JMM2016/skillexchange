import React from 'react';
import ReactDOM from 'react-dom';


export default class Home extends React.Component {
	render () {
		return (
			<div className="container">
			<button type="button" className="btn btn-default" data-toggle="tooltip" data-placement="left" title="Tooltip on left">Tooltip on left</button>

			<button type="button" className="btn btn-default" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Tooltip on top</button>

			<button type="button" className="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</button>

			<button type="button" className="btn btn-default" data-toggle="tooltip" data-placement="right" title="Tooltip on right">Tooltip on right</button>
			</div>
		)
	}
}
