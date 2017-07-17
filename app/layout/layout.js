import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <div className="top-menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Log in/out</Link>
            </li>
            <li>
              <Link to="/main">Main</Link>
            </li>
          </ul>
        </div>

        {this.props.children}
      </div>
    )
  }
}