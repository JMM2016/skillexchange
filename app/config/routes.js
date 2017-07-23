// Include the React library
  // var React = require("react");
import React from 'react';

// Include the react-router module
  // var router = require("react-router");
import router from 'react-router';

// Include the Route component
  // var Route = router.Route;
const Route = router.Route;

//  Include the IndexRoute (catch-all route)
const IndexRoute = router.IndexRoute;


// Include the Router component
const Router = router.Router;

// Include the browserHistory prop to configure client side routing
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#browserhistory
const browserHistory = router.browserHistory;

// Reference the high-l3evel components
// var Main = require("../components/Main");
// var Search = require("../components/Search");
// var User = require("../components/User");
const Main = require("../pages/main");
const Landing = require("../pages/landing");
const Login = require("../pages/login");


// Export the Routes
module.exports = (
  // High level component is the Router component.
  <Router history={browserHistory}>
    <Route path="/" component={Landing}>

      {/* If user selects Search or Saved show the appropriate component */}
      <Route path="Login" component={Login} />
      <Route path="Main" component={Main} />

      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={Landing} />

    </Route>
  </Router>
);