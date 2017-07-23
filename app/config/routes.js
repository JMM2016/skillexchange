// Include the React library
import React from 'react';

import { render } from 'react-dom';

// Include the react-router module
import { Router, Route, hashHistory } from 'react-router';


//  Include the IndexRoute (catch-all route)
// const IndexRoute = router.IndexRoute;

// Reference the high-level components
import Main from "../components/Main";
import Search from "../components/Search";
import User from "../components/User";
import Map from "../components/Map";


// Export the Routes
render((
  // High level component is the Router component.
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

      {/* If user selects Search or Saved show the appropriate component */}
      <Route path="/search" component={Search} />
      <Route path="/user" component={User} />
      <Route path="/map" component={Map} />


      {/* If user selects any other path... we get the Home Route */}
      {/*<IndexRoute component={Search} />*/}

    </Route>
  </Router>), document.getElementById('app')
);
