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
            state: "",
            bio: ""
        };

        // this.handleChange = this.handleChange.bind(this);

        // this.updateInfo = this.updateInfo.bind();
    }

    render() {
        console.log(this.props.userCity)

        return (
            <div>
                <div style={{backgroundColor: '#5cb85c'}} className="panel panel-primary">
                    <div className="panel-heading">
                        <h1 className="panel-title">
                            <strong>
                                <i className="fa fa-list-alt"></i>

                            </strong>
                        </h1>
                    </div>
                    <div className="panel-body">
                        <ul className="list-group">
                            <div style={{fontSize: '30px'}}>{this.props.userName}</div>
                            <div><strong>Haves: </strong>{this.props.userHave}</div>
                            <div><strong>Needs: </strong>{this.props.userNeed}</div>
                            <div><strong>A little about myself: </strong><p>{this.props.userBio}</p></div>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}

module.exports = UserSearchProfile;