var React = require("react");
// Include the Helper (for the saved recall)
var helpers = require("../../utils/helpers");


var browserHistory = require("react-router").browserHistory;
var Link = require("react-router").Link;
var Home = require('./grandchildren/Home')

var Account = React.createClass({

  getInitialState: function(){
    return {
      message:"BARTERING IS BACK!",
      sub:"Money holds no sway",
      img:"./img/coffee2.jpeg"
    };
  },

  setParent: function(newMessage) {
    this.setState({
      message: newMessage
    });
  },

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
              <div className="navbar-brand" href="#">
                <Link to="/"><img className="brandImg img-responsive" src="./img/friend.png" alt="Brand" /></Link>
              </div>
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
          <div className="titlearea">
          {/*<img className="mainPhoto" alt="photohere" src={this.state.img} width="100%"/>*/}
        	<div className="page-header text-center">
	          <h1 className="">{this.state.message}</h1>
	          <p>{this.state.sub}</p>
          </div>
            
        	</div>

            {/*<img className='img-responsive inlineblock' src='./img/guitar.jpg' alt='background'/>*/}
          </div>
          
          <div className="container-fluid accountcontainer">
		        {this.props.children}
          </div>
			</div>

		);
	}
});

module.exports = Account;