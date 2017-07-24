// Include React as a dependency
import React from 'react';

// Results Component Declaration
export default React.createClass({

    getInitialState() {
        return {
            name: ""
        };
    },

    renderNeed() {
        console.log("RENDER NEED")
        var needSearched = this.props.need_query

        if (!this.props.need_results.docs) {
            return (
                <div>Search for something you need! {needSearched}</div>
            )
        } else {
            if (!this.props.need_results.docs.data[0]) {
                console.log("you did it!");
                return (

                    <div>
                        <div>Nobody has {needSearched} to offer :(</div>
                    </div>
                )
            }

            return this.props.need_results.docs.data.map(function (users, index) {
                console.log(users.firstName, "HEYHEYHEYHEYHEY")

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

    renderHave() {

        var haveSearched = this.props.have_query;

        if (!this.props.have_results.docs) {
            return (
                <div>Search for people who need what you got!</div>
            )
        } else {
            if (!this.props.have_results.docs.data[0]) {
                console.log("you did it!");
                return (

                    <div>
                        <div>Nobody has {haveSearched} to offer :(</div>
                    </div>
                )
            }

            return this.props.have_results.docs.data.map(function (users, index) {

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

    render() {

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
    }
});

