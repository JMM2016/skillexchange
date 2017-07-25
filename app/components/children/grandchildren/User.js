// Include React as a dependency
import React from 'react';
var browseHistory = require("react-router").browseHistory;

// Include the helpers for making API calls
import helpers from "../../../utils/helpers";
import geocodeHelper from "../../../utils/geocodeHelper";

// Create the Main component
export default React.createClass({

    getInitialState() {
        return {
            userInfo: {}
        };
    },

    updateInfo() {

        console.log(this.props.params.id, "ID HERE HERE")

        helpers.findUser(this.props.params.id).then(function (results) {
            // console.log(results, "almost there!")

            this.setState({userInfo: results});
        }.bind(this));

    },

    renderUser() {
        console.log(this.state.userInfo)
        // return this.state.userInfo.data.map(function (userInfo, index){
        //     return (
        //         <div>{userInfo}</div>
        //     )
        // })
    },

    // Our render method. Utilizing a few helper methods to keep this logic clean
    render() {
        return (
            <div>
                <div>should go under this</div>
                <div>{this.renderUser()}</div>
                <form action="/api/user" method="post">
                    {/*<label>*/}
                    {/*Name:*/}
                    <input type="text" name="firstname" placeholder="first name"/>
                    <input type="text" name="have" placeholder="have"/>
                    <input type="text" name="need" placeholder="need"/>
                    <div></div>
                    <input type="text" name="street" placeholder="Street"/>
                    <input type="text" name="city" placeholder="City"/>
                    <input type="text" name="state" placeholder="State"/>
                    {/*</label>*/}
                    <input type="submit" value="Submit" onClick={this.updateInfo}/>
                </form>


            </div>
        )
    }
});

