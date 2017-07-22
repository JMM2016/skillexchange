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
var Account = require("../components/children/Account");
var Signup = require("../components/children/grandchildren/Signup");
var Login = require("../components/children/grandchildren/Login");
var Profile = require("../components/children/Profile");
var Chat = require("../components/children/grandchildren/Chat");

// Export the Routes
module.exports = (
  // High level component is the Router component.
  <Router history={browserHistory}>
    <Route path="/" component={Main}>

      <Route path="Account" component={Account}>
        <Route path="Signup" component={Signup} />
        <Route path="Login" component={Login} />
      </Route>
      <Route path="Profile/:id" component={Profile} >
          <Route path="Chat" component={Chat} />
      </Route>
      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={Account} />

    </Route>
  </Router>
);
