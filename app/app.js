// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Include the main Main Component
var Main = require("./components/Main");

import {browserHistory, Router, Route, Redirect} from 'react-router';
import Layout from './layout/layout.js';
import PageOne from './pages/pageone';
import PageTwo from './pages/pagetwo';
import PageThree from './pages/pagethree';

const app = (
	<Router history={browserHistory}>
		{// Redirect will take 2 props
		}
		<Redirect from="/" to="/home"/>
		<Route path='/' component={Layout} />
			<Route path='pageone' component={PageOne} />
			<Route path='pagetwo' component={PageTwo} />
			<Route path='pagethree' component={PageThree} />

	</Router>
)

// This code here allows us to render our main component (in this case Main)
ReactDOM.render(
	<Main />,
 	document.getElementById("app"),
 	function() {
 		console.timeEnd('react-app')
 	}
 	);
