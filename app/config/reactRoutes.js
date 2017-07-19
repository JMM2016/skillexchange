// Include the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component
var Route = router.Route;

//  Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Include the Router component
var Router = router.Router;

// Include the browserHistory prop to configure client side routing
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#browserhistory
var browserHistory = router.browserHistory;

// Reference the high-level components
var Main = require("../components/Main");
var Signup = require("../components/children/Signup");
var Login = require("../components/children/Login");
var Profile = require("../components/children/Profile");

// Export the Routes
module.exports = (
  // High level component is the Router component.
  <Router history={browserHistory}>
    <Route path="/" component={Main}>

      <Route path="/Signup" component={Signup} />

      <Route path="/Login" component={Login} />
      
      <Route path="/Profile" component={Profile} />

      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={Signup} />

    </Route>
  </Router>
);
