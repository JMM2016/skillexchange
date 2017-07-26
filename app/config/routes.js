import React from 'react';

import {render} from 'react-dom';

// Include the react-router module
// import {Router, Route, hashHistory, IndexRoute} from 'react-router';
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
import Main from "../components/Main";
import Search from "../components/children/grandchildren/Search";
import User from "../components/children/grandchildren/User";
import Map from "../components/children/grandchildren/Map";
import Account from "../components/children/Account";
import Signup from "../components/children/grandchildren/Signup";
import Login from "../components/children/grandchildren/Login";
import Profile from "../components/children/Profile";
import Chat from "../components/children/grandchildren/Chat";
import Contract from "../components/children/grandchildren/Contract";

// Export the Routes
module.exports = (
// render((
    // High level component is the Router component.
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <Route path="Account" component={Account}>
                <Route path="Signup" component={Signup}/>
                <Route path="Login" component={Login}/>
            </Route>
            <Route path="Profile/:id" component={Profile}>
                <Route path="Search" component={Search}/>
                <Route path="User" component={User}/>
                <Route path="Map" component={Map}/>
                <Route path="Chat" component={Chat}/>
                <Route path="Contract" component={Contract} />
            </Route>
            {/* If user selects Search or Saved show the appropriate component */}
            
            {/* If user selects any other path... we get the Home Route */}
            <IndexRoute component={Account}/>
        </Route>
    </Router>
    // ), document.getElementById('app')
);
