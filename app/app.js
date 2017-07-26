// Include the Main React Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

import router from 'react-router'

import $ from 'jquery';
import Bootstrap from 'bootstrap/dist/js/bootstrap.js';


// Grabs the Routes
// const routes = require ('./config/routes');
import routes from './config/routes';

// This code here allows us to render our main component (in this case "Main")
ReactDOM.render(
	routes
	// app,
	// {routes},
	// <Router history={hashHistory}>
	// 	<Route exact path="/" component={Home}/>
	// 	<Route path="/login" component={LogIn}/>
	// 	<Route path="/main" component={Main}/>
	// </Router>
	, document.getElementById("app"),
	() => {
		console.timeEnd('react-app')
	}
);
