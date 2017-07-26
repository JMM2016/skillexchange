var React = require("react");
// Include the Helper (for the saved recall)
var helpers = require("../../utils/helpers");


var browserHistory = require("react-router").browserHistory;
var Link = require("react-router").Link;

var Account = React.createClass({
	render: function() {
		return (
			<div>

			 <nav className="navbar navbar-inverse navbar-fixed-top">

          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapsed-navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">
                <img className="brandImg img-responsive" src="./img/friend.png" alt="Brand" />
              </a>
              <h2 className="navbar-text" style={{color: "#009f9b", fontWeight: "bold"}}> Skillzshare</h2>
            </div>

            <div id="collapsed-navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li id="navbar-links"><Link to="/Account/Signup">Sign Up</Link></li>
                <li id="navbar-links"><Link to="/Account/Login">Login</Link></li>                
              </ul>
            </div>
          </div>
        </nav>

        <div className="container-fluid">
        	<div className="page-header titlearea text-center">
	          <h1>Bartering is back!</h1>
	          <br />
	          <p>Money holds no sway</p>
        	</div>

          <div className="container accountcontainer">
		        {this.props.children}
          </div>
				</div>
			</div>

		);
	}
});

module.exports = Account;