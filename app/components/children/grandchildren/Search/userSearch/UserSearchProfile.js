// Include React as a dependency
import React from 'react';

// Include the helpers for making API calls
// import helpers from "../../../../utils/helpers";

// Results Component Declaration
class UserSearchProfile extends React.Component {

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

    render() {
        console.log(this.props.userCity)
        return (
            <div>
                <div>{this.props.userName}</div>
                <div>HELLO!!! {this.props.userHave}</div>
                <div>HELLO!!! {this.props.userNeed}</div>
            </div>
        )
    }
}

module.exports = UserSearchProfile;