// Include React as a dependency
var React = require("react");

// Include our helpers for API calls
var helpers = require("../../utils/helpers");

// Results Component Declaration
var Results = React.createClass({

    // Here we will save states for the contents we save
    getInitialState: function () {
        return {
            name: ""
        };
    },

    // A helper method for mapping through our articles and outputting some HTML
    renderArticles: function () {
        console.log(this.props.results, "hi julia! hi shane! results")

        return this.props.results.docs.data.map(function (users, index) {
            console.log(users, "users here")
            // Each article thus reperesents a list group item with a known index
            return (
                <div>

                    <div key={index}>
                        <li className="list-group-item">
                            <h3>
                                <div>
                                    <p>{index + 1}. {users.firstName}</p>
                                </div>

                                <a href={users._id} rel="noopener noreferrer" target="_blank">
                                    <button className="btn btn-default ">View Profile</button>
                                </a>
                                <div className="btn-group pull-right">
                                    {/*
                                     By using an arrow function callback to wrap this.handleClick,
                                     we can pass in an article as an argument
                                     */}
                                    <button className="btn btn-primary"
                                            onClick={() => this.handleClick(article)}>Save
                                    </button>
                                </div>
                            </h3>
                            {/*<p>Date Published: {article.pub_date}</p>*/}

                        </li>

                    </div>
                </div>
            );

        }.bind(this));

    },

    // A helper method for rendering a container to hold all of our articles
    renderContainer: function () {
        return (
            <div className="main-container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h1 className="panel-title">
                                    <strong>
                                        <i className="fa fa-list-alt"></i>
                                        Results
                                    </strong>
                                </h1>
                            </div>
                            <div className="panel-body">
                                <ul className="list-group">
                                    {this.renderArticles()}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
    render: function () {
        // If we have no articles, render this HTML
        if (!this.props.results.docs) {
            return (
                <li className="list-group-item">
                    <h3>
            <span>
              <em>Enter search terms to begin...</em>
            </span>
                    </h3>
                </li>
            );
        }
        // If we have articles, return this.renderContainer() which in turn, returns all the articles
        return this.renderContainer();
    }
});

// Export the module back to the route
module.exports = Results;
