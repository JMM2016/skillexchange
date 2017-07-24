// Include the Main React Dependencies
import React from 'react';
// import { render } from 'react-dom';
import ReactDOM from 'react-dom';
// import { Router, Route, hashHistory } from 'react-router';

import router from 'react-router'

import $ from 'jquery';
import Bootstrap from 'bootstrap/dist/js/bootstrap.js';


// Grabs the Routes
// const routes = require ('./config/routes');
import routes from './config/routes';



// import {Router, Route, Redirect} from 'react-router';


// import Layout from './layout/layout';

// // Import pages
// import Home from './pages/home'
// import Main from './pages/main'
// import LogIn from './pages/login'
// import LandingPage from "./pages/landing";
// import MainPage from "./pages/main";
// import LogInPage from "./pages/login";

// const app = (
// 	<Router>
//     <Redirect from="/" to="/main" />
//     <Route path="/" component={Layout}>
//       <Route path="main" component={MainPage} />
//       <Route path="login" component={MainPage} />
//       <Route path="landing" component={MainPage} />
//     </Route>
//   </Router>

// 	)



// This code here allows us to render our main component (in this case "Main")
// ReactDOM.render(
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
