// Include React as a dependency
import React from 'react';

// Include the Query and Results components
import Query from "./Search/Query";
import Results from "./Search/Results";

// Include the helpers for making API calls
import helpers from "../../../utils/helpers";


// Create the Search component
export default React.createClass({

    getInitialState() {
        return {
            need_results: {},
            have_results: {},
            need_query: "",
            have_query: ""
        };
    },



    setQuery(newQuery, isNeed) {
        if(isNeed) {
            helpers.needSearch(newQuery).then(function (data) {
                this.setState({need_query: newQuery});
                this.setState({need_results: {docs: data}});
            }.bind(this));
        } else {
            helpers.haveSearch(newQuery).then(function (data) {
                this.setState({have_query: newQuery});
                this.setState({have_results: {docs: data}});
            }.bind(this));
        }
    },

    // Render the component. Note how we deploy both the Query and the Results Components
    render() {
        console.log("COMPONENT RENDERED");

        return (
            <div className="main-container">

                {/* Note how we pass the setQuery function to enable Query to perform searches */}
                <Query updateQuery={this.setQuery} />
                {/* Note how we pass in the results into this component */}
                <Results need_results={this.state.need_results} have_results={this.state.have_results} need_query={this.state.need_query} have_query={this.state.have_query}/>
            </div>
        );
    }
});
