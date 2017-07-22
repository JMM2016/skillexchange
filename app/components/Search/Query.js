// Include React as a dependency
var React = require("react");

// Include the helpers for making API calls
var helpers = require("../../utils/helpers");

// Query Component Declaration
var Query = React.createClass({

        // Here we set initial variables for the component to be blanks
        getInitialState: function () {
            return {
                need: "",
                have: ""
            };
        },

        getAllUsers: function (event) {
            event.preventDefault();
            console.log("user button clicked");
            this.props.updateSearch();
        },

        // Whenever we detect ANY change in the textbox, we register it.
        handleChange: function (event) {
            console.log("TEXT CHANGED");
            console.log(event.target.value)
            console.log(event.target.id)
            // Here we create syntax to capture any change in text to the query terms (pre-search).
            // See this Stack Overflow answer for more details:
            // http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
            var newState = {};
            newState[event.target.id] = event.target.value;
            if (event.target.id === "needSearch") {
                this.setState({need: event.target.value});
                console.log(event.target.value, "need")

            } else {
                this.setState({have: event.target.value});
                console.log(event.target.value, "have")
            }
            ;
        },

// This code handles the sending of the search terms to the parent Search component
        handleSubmit: function (event) {
            console.log("CLICKEoooo", event);

            console.log("handlesubmit clicked")
            // if (isNeed) {
                event.preventDefault();
                console.log("CLICKED", console.log(event.target.id));
                this.props.updateSearch(this.state.need);
                // }
                // else {
                //     event.preventDefault();
                //     console.log("CLICKED");
                //     this.props.updateNeed(this.state.have, false);
                // }
            // }

            // handleSubmit: function(event) {
            //     event.preventDefault();
            //     console.log("CLICKED");
            //     this.props.updateSearch(this.state.search, this.state.start, this.state.end);
        },

// Here we render the Query component
        render: function () {

            return (
                <div className="main-container">

                    <div className="row">
                        <div className="col-lg-12">

                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    <h1 className="panel-title">
                                        <strong>
                                            <i className="fa fa-newspaper-o" aria-hidden="true"></i> What do you need?
                                        </strong>
                                    </h1>
                                </div>
                                <div className="panel-body">
                                    {/*<button*/}
                                    {/*onClick={this.getAllUsers}*/}
                                    {/*className="btn btn-danger">Get all users*/}
                                    {/*</button>*/}
                                    {/* Note how we associate the text-box inputs with the state values */}
                                    <form onSubmit={this.handleSubmit.bind(this)}>
                                        <div className="form-group">
                                            <h4 className=""><strong>Need</strong></h4>
                                            <input
                                                type="text"
                                                value={this.state.need}
                                                className="form-control"
                                                id="needSearch"
                                                onChange={this.handleChange}
                                                required
                                                placeholder="What are you looking for?"
                                            />

                                        </div>

                                        {/* Here we create the onClick event that triggers the HandleSubmit */}
                                        <div className="pull-right">
                                            <button
                                                type="submit"
                                                className="btn btn-danger"
                                            >
                                                <h4>Submit</h4>
                                            </button>
                                        </div>
                                    </form>

                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <h4 className=""><strong>Have</strong></h4>
                                            <input
                                                type="text"
                                                value={this.state.have}
                                                className="form-control"
                                                id="haveSearch"
                                                onChange={this.handleChange}
                                                required
                                                placeholder="What so you have to offer?"
                                            />

                                        </div>

                                        {/* Here we create the onClick event that triggers the HandleSubmit */}
                                        <div className="pull-right">
                                            <button
                                                type="submit"
                                                className="btn btn-danger"
                                            >
                                                <h4>Submit</h4>
                                            </button>
                                        </div>
                                    </form>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            );
        }
    })
;

// Export the module back to the route
module.exports = Query;
