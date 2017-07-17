import React, { Component } from 'react';
//import logo from '../../logo.svg';
import './App.css';
import RatingContainer from '../../containers/RatingContainer/RatingContainer'
import {Switch, Route} from 'react-router-dom';

import NavBar from "../Navbar/Navbar"
import DefaultLayout from '../../layouts/DefaultLayout/DefaultLayout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={DefaultLayout}/>
          <Route exact path='/rating' component={RatingContainer}/>
          {/*<DefaultLayout />*/}
        </Switch>
      </div>
    );
  }
}

export default App;

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//
//         <p>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to='/Rating'>Rating</Link></li>
//           </ul>
//
//           <Switch>
//             <Route exact path="/" component={Home}/>
//             <Route path="/Rating" component={RatingContainer}/>
//           </Switch>
//         </p>
//         Bottom.
//       </div>
//     );
//   }
// }