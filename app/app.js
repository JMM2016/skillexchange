// Include the Main React Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';






// import {Router, Route, Redirect} from 'react-router';


// import Layout from './layout/layout';

// // Import pages
import LandingPage from "./pages/landing";
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
	<LandingPage />,
	// app,
	document.getElementById("app"),
	() => {
		console.timeEnd('react-app')
	}
);
