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
    renderNeed: function () {
        console.log("RENDER NEED")
        var needSearched = this.props.need_query

        if (!this.props.need_results.docs) {
            return (
                <div>Search for something you need! {needSearched}</div>
            )
        } else {
            if (!this.props.need_results.docs.data[0]) {
                console.log("you did it!")
                return (

                    <div>
                        <div>Nobody has {needSearched} to offer :(</div>
                    </div>
                )
            }
            // console.log(this.props.need_results.docs.data, "TEST")

            return this.props.need_results.docs.data.map(function (users, index) {
                console.log(users.firstName, "HEYHEYHEYHEYHEY")

                // Each article thus represents a list group item with a known index
                return (
                    <div>
                        <div>{needSearched}</div>
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
        }
    },

    // A helper method for mapping through our articles and outputting some HTML
    renderHave: function () {

        var haveSearched = this.props.have_query

        if (!this.props.have_results.docs) {
            return (
                <div>Search for people who need what you got!</div>
            )
        } else {

            return this.props.have_results.docs.data.map(function (users, index) {

                // Each article thus reperesents a list group item with a known index
                return (
                    <div>
                        <div>{haveSearched}</div>
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
        }
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
                                        Need Results
                                    </strong>
                                </h1>
                            </div>
                            <div className="panel-body">
                                <ul className="list-group">
                                    {this.renderNeed()}
                                </ul>
                            </div>
                            <div className="panel-heading">
                                <h1 className="panel-title">
                                    <strong>
                                        <i className="fa fa-list-alt"></i>
                                        Have Results
                                    </strong>
                                </h1>
                            </div>
                            <div className="panel-body">
                                <ul className="list-group">
                                    {/*{this.renderHave()}*/}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    ,
    render: function () {
        // If we have no articles, render this HTML
        // if (!this.props.need_results.docs) {
        return (
            <div className="main-container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h1 className="panel-title">
                                    <strong>
                                        <i className="fa fa-list-alt"></i>
                                        Need Results
                                    </strong>
                                </h1>
                            </div>
                            <div className="panel-body">
                                <ul className="list-group">
                                    {this.renderNeed()}
                                </ul>
                            </div>
                            <div className="panel-heading">
                                <h1 className="panel-title">
                                    <strong>
                                        <i className="fa fa-list-alt"></i>
                                        Have Results
                                    </strong>
                                </h1>
                            </div>
                            <div className="panel-body">
                                <ul className="list-group">
                                    {this.renderHave()}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        // }
        // If we have articles, return this.renderContainer() which in turn, returns all the articles
        // return this.renderContainer();
    }
});

// Export the module back to the route
module.exports = Results;
