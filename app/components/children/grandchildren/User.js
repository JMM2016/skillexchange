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
            firstName: '',
            lastName: '',
            email: '',
            city: 'city',
            have : []
        };

        this.handleChange = this.handleChange.bind(this);

        // this.updateInfo = this.updateInfo.bind();
    }


    componentDidMount() {
        helpers.findUser(this.props.params.id).then(function (results) {
            // console.log(results, "almost there!")
            const {firstName, lastName, email, city} = results.data;

            this.setState({
                firstName: firstName.toString(),
                lastName: lastName.toString(),
                email: email.toString(),
                city: city.toString()
            });

            console.log('first name', firstName)
            console.log('last name', lastName)

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

        this.setState({[inputName] : event.target.value});
    }

    render() {
        return (
            <div>
                <div>should go under this</div>
                <form action={`/api/update/${this.props.params.id}?_method=PUT`} method="POST">
                    <input type="text" name="have" placeholder="have"
                           value={this.state.have}
                           onChange={this.handleChange}
                    />
                    <br/>
                    <input type="text" name="need" placeholder="need"/>
                    <br/>
                    <input type="text" name="street" placeholder="Street"/>
                    <br/>
                    <input type="text" name="city" placeholder="City"
                           value={this.state.city}
                           onChange={this.handleChange}/>
                    <br/>
                    <input type="text" name="state" placeholder="State"/>
                    <br/>
                    <input type="submit" value="Submit" onClick={this.myTest}/>
                </form>

                <ul>
                    <li><label>Have :</label>{this.state.have}</li>
                    <li><label>City :</label>{this.state.city}</li>
                </ul>


            </div>
        )
    }
}

module.exports = User
