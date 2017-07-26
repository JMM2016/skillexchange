// Include React as a dependency
import React from 'react';

// Include the helpers for making API calls
import helpers from "../../../../utils/helpers";

import UserSearchProfile from "./userSearch/UserSearchProfile";


// Results Component Declaration
class Results extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            have: [],
            need: [],
            city: "",
            street: "",
            state: ""
        };

        // this.handleChange = this.handleChange.bind(this);

        // this.updateInfo = this.updateInfo.bind();
    }


    handleUser(userID) {

        console.log(this.state.city)
        helpers.findUser(userID).then(function (results) {
            // console.log(results, "HANDLE USER")
            const {have, need, street, city, state} = results.data;

            this.setState({
                have: have.toString(),
                need: need.toString(),
                street: street.toString(),
                city: city.toString(),
                state: state.toString()
            });
            // console.log('city', {city})
            this.renderUser(results)
        }.bind(this));
    }

    renderUser(results) {
        console.log("RENDER USER", results)
        console.log("RENDER USER EMAIL", results.data.email)
        // console.log("RENDER USER", results)
        //
        if (!results.data.email) {
            return (
                <div>no user selected</div>
            )
        } else {
            return (
                <div>
                    <div>YOU MADE IT!!!</div>
                    <div>{this.state.city}</div>
                </div>
            )
        }
    }

    renderNeed() {
        console.log("RENDER NEED")
        var needSearched = this.props.need_query

        if (!this.props.need_results.docs) {
            return (
                <div className="text-center">Results pending...</div>
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
                console.log(users._id, "HEYHEYHEYHEYHEY")

                return (
                    <div>
                        <div>
                            {this.props.children}
                        </div>
                        <div>{needSearched}</div>
                        <div key={index}>
                            <li className="list-group-item">
                                <h3>
                                    <div>
                                        <p>{index + 1}. {users.firstName}</p>
                                    </div>
                                    <div>user id: {users._id}</div>
                                    <button onClick={() => this.handleUser(users._id)}>see user info</button>

                                    {/*<link to={`/Profile/${users._id}/User`} rel="noopener noreferrer" target="_blank">*/}
                                    {/*<button className="btn btn-default ">View Profile</button>*/}
                                    {/*</link>*/}
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
    }

    renderHave() {

        let haveSearched = this.props.have_query;

        if (!this.props.have_results.docs) {
            return (
                <div className="text-center">Results pending...</div>
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

                                    {/*<link to={`/Profile/${users._id}/User`} rel="noopener noreferrer" target="_blank">*/}
                                    {/*<button className="btn btn-default ">View Profile</button>*/}
                                    {/*</link>*/}
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
    }

    render() {

        console.log(this.state.city, "city in render")

        return (
            <div className="main-container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">


                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h1 className="panel-title">
                                    <strong>
                                        <i className="fa fa-list-alt"></i>

                                    </strong>
                                </h1>
                            </div>
                            <div className="panel-body">
                                <ul className="list-group">
                                    {this.renderNeed()}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h1 className="panel-title">
                                    <strong>
                                        <i className="fa fa-list-alt"></i>
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
                <div className="row text-center">
                    <UserSearchProfile userCity={this.state.city}/>
                </div>
            </div>
        );
    }
}

module.exports = Results
