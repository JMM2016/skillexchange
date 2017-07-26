import React, { Component } from 'react';
//import logo from '../../logo.svg';
import './App.css';
import RatingContainer from '../../containers/RatingContainer/RatingContainer'
import {Switch, Route} from 'react-router-dom';

import NavBar from "../Navbar/Navbar"
import DefaultLayout from '../../layouts/DefaultLayout/DefaultLayout';
import Contract from '../../forms/Contract/Contract'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={DefaultLayout}/>
          <Route exact path='/rating' component={RatingContainer}/>
          <Route exact path='/contract' component={Contract}/>
        </Switch>
      </div>
    );
  }
}

export default App;