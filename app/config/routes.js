// Include the React library
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from '../pages/main';
import Home from '../pages/home';
import Login from '../pages/login';


// Export the Routes
module.exports = (
  <Route path="/" component={Home}>
  <IndexRoute component={Login}/>
  <Route path="/login" component={Login}
    <Route path=""
);