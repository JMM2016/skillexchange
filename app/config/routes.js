// Include the React library
import React from 'react';

import {render} from 'react-dom';

// Include the react-router module
import {Router, Route, hashHistory} from 'react-router';

// Include the Router component
import Router from 'router.Router'

//  Include the IndexRoute (catch-all route)
const IndexRoute = router.IndexRoute;

// Reference the high-level components
import Main from "../components/Main";
import Search from "../components/Search";
import User from "../components/User";
import Map from "../components/Map";
import Account from "../components/children/Account";
import Signup from "../components/children/grandchildren/Signup";
import Login from "../components/children/grandchildren/Login";
import Profile from "../components/children/Profile";
import Chat from "../components/children/grandchildren/Chat";

// Export the Routes
render((
    // High level component is the Router component.
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="Account" component={Account}>
                <Route path="Signup" component={Signup}/>
                <Route path="Login" component={Login}/>
            </Route>
            <Route path="Profile/:id" component={Profile}>
                <Route path="Chat" component={Chat}/>
            </Route>
            {/* If user selects Search or Saved show the appropriate component */}
            <Route path="/search" component={Search}/>
            <Route path="/user" component={User}/>
            <Route path="/map" component={Map}/>

            {/* If user selects any other path... we get the Home Route */}
            <IndexRoute component={Account}/>
        </Route>
    </Router>), document.getElementById('app')
);



