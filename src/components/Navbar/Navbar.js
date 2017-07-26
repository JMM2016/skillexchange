/**
 * Created by Miguel on 7/17/2017.
 */

import React, { Component } from 'react';
import {Link} from 'react-router-dom'

const divStyle = {
  marginBottom: 15
}


class NavBar extends Component {
  render() {
    return (

        <nav className="navbar navbar-toggleable-md navbar-light bg-faded"  style={divStyle}>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <a className="navbar-brand text-left" href="#">Skillex</a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <Link to="/">Home</Link> <span className="sr-only">(current)</span>
              </li>
              <li className="nav-item">
                &nbsp;<Link to="/contract">Contract</Link>
              </li>
              <li className="nav-item">
                &nbsp;<Link to="/rating">Rate-User</Link>
              </li>
              {/*<li className="nav-item">*/}
                {/*<a className="nav-link disabled" href="#">Disabled</a>*/}
              {/*</li>*/}
            </ul>
            {/*<form className="form-inline my-2 my-lg-0">*/}
              {/*<input className="form-control mr-sm-2" type="text" placeholder="Search">*/}
                {/*<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>*/}
            {/*</form>*/}
          </div>
        </nav>
    );
  }
}

export default NavBar;