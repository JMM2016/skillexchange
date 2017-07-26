/**
 * Created by Miguel on 7/17/2017.
 */

import React from 'react';
//import logo from './logo.svg';
import './DefaultLayout.css';
// import RatingContainer from '../../containers/RatingContainer/RatingContainer'
// import {
//   Switch,
//   Route,
//   Link
// } from 'react-router-dom';

const DefaultLayout = ({ children }) => {
  return (
    <div className="default-layout">
      <div className="default-layout-header">
        {/*<img src={logo} className="default-layout-logo" alt="logo" />*/}
        <h2>Welcome to Skillex!</h2>
      </div>
      <div className='default-layout-body'>
        {/*{children}*/}

      </div>
    </div>
  )
}
export default DefaultLayout;