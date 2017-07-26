// Include React as a dependency
import React from 'react';
var browseHistory = require("react-router").browseHistory;

// Include the helpers for making API calls
import helpers from "../../../utils/helpers";
import geocodeHelper from "../../../utils/geocodeHelper";

// Create the Main component
class User extends React.Component {

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

        this.handleChange = this.handleChange.bind(this);

        // this.updateInfo = this.updateInfo.bind();
    }


    componentDidMount() {
        helpers.findUser(this.props.params.id).then(function (results) {
            console.log(results, "almost there!")
            const {have, need, street, city, state, bio} = results.data;

            this.setState({
                have: have.toString(),
                need: need.toString(),
                street: street.toString(),
                city: city.toString(),
                state: state.toString(),
                bio: bio.toString()
            });

            console.log('city', city)

            console.log(results.data);
        }.bind(this));
    }

    //
    // updateInfo(str) {
    //
    //     alert(str);
    //
    //     helpers.updateUser(this.props.params.id).then(function (results) {
    //
    //         const {firstName, lastName, email, city} = results.data;
    //
    //         this.setState({firstName: firstName});
    //         this.setState({lastName: lastName});
    //         this.setState({email: email});
    //         this.setState({city: city});
    //
    //         console.log('updated first name', firstName)
    //         console.log('updated last name', lastName)
    //         console.log()
    //     });
    // }
    //
    // renderUser() {
    //
    //     // console.log(this.state.userInfo.data, "IN RENDER")
    //
    // }

    // Our render method. Utilizing a few helper methods to keep this logic clean
    handleChange(event) {

        console.log(event.target);
        let inputName = event.target.name;

        console.log(inputName);
        console.log(event.target.value);

        this.setState({[inputName]: event.target.value});
    }

    render() {

        var styles = {
            listStyle: 'none'
        };

        return (
            <div>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">

                        <form action={`/api/update/${this.props.params.id}?_method=PUT`} method="POST">
                            <input type="text" name="have" placeholder="have"
                                // value={this.state.have}
                                   onChange={this.handleChange}
                            />
                            <br/>
                            <input type="text" name="need" placeholder="need"
                                // value={this.state.need}
                                   onChange={this.handleChange}/>
                            <br/>
                            <input type="text" name="street" placeholder="Street"
                                // value={this.state.street}
                                   onChange={this.handleChange}/>
                            <br/>
                            <input type="text" name="city" placeholder="City"
                                // value={this.state.city}
                                   onChange={this.handleChange}/>
                            <br/>
                            <input type="text" name="state" placeholder="State"
                                // value={this.state.state}
                                   onChange={this.handleChange}/>
                            <br/>
                            <input type="text" name="bio" placeholder="Tell us about yourself"
                                // value={this.state.state}
                                   onChange={this.handleChange}/>
                            <br/>


                            <input type="submit" value="Submit" onClick={this.myTest}/>
                        </form>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">

                        <ul style={styles}>
                            <li><label>Have : </label> {this.state.have}</li>

                            <li><label>Need : </label> {this.state.need}</li>

                            <li><label>Street : </label> {this.state.street}</li>

                            <li><label>City : </label> {this.state.city}</li>

                            <li><label>State : </label> {this.state.state}</li>

                            <li><label>Bio : </label> {this.state.bio}</li>
                        </ul>
                    </div>
                </div>


            </div>
        )
    }
}

module.exports = User
