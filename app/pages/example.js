<nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">
                <img className="brandImg img-responsive" src="./../img/friend.png" alt="Brand" />
              </a>
              <h2 className="navbar-text" style={{color: "#009f9b", fontWeight: "bold"}}> Skillshare</h2>
            </div>

            <div id="#bs-example-navbar-collapse-1" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li id="navbar-links">
                  <Link to={`/Profile/${this.props.params.id}/User`}>Profile</Link>
                </li>
                <li id="navbar-links">
                  <Link to={`/Profile/${this.props.params.id}/Search`}>Search</Link>
                </li>
                <li id="navbar-links">
                  <Link to={`/Profile/${this.props.params.id}/Map`}>Map</Link>
                </li>
                <li id="navbar-links">
                  <Link to={`/Profile/${this.props.params.id}/Chat`}>Chat</Link>
                </li>
                <li id="navbar-links">
                  <Link>Rate</Link>
                </li>
                   
              </ul>
            </div>
          </div>
        </nav>