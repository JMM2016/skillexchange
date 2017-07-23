// Include the Main React Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import Bootstrap from 'bootstrap/dist/css/bootstrap.css';


// Grabs the Routes
// const routes = require ('./config/routes');
// import routes from './config/routes';



// import {Router, Route, Redirect} from 'react-router';


// import Layout from './layout/layout';

// // Import pages
import Home from './pages/home'
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
ReactDOM.render(
	// <MainPage />,
	// <LogInPage />,
	// <LandingPage />,
	<Home/>,
	// app,
	// {routes},
	document.getElementById("app"),
	() => {
		console.timeEnd('react-app')
	}
);
