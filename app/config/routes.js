// Include the React library
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Main from '../pages/main';
import Home from '../pages/home';
import LogIn from '../pages/login';


// Export the Routes
module.exports = (
	<Router history={hashHistory}>
    <Route path="/" component={Home}>
      <Route path="/main" component={Main}>
      <Route path="/home" component={Home}/>
      <Route path="/login" component={LogIn}/>
      </Route>
    </Route>
  </Router>
);