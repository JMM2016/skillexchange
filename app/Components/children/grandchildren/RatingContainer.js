/**
 * Created by Miguel on 7/16/2017.
 */

import React, { Component } from 'react';
//import {Link} from 'react-router-dom'
import './RatingContainer.css';
import axios from 'axios';


class RatingContainer extends Component {
  constructor(props) {
    super(props);

    // loggedEmail could be their _id
    this.state = {
      rating: '0',
      currentUserEmail: '',
      enteredEmail: '',
      found: false
    }

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.tempHardCodeUser = this.tempHardCodeUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.tempHardCodeUser()
    //axios.post(`http://exmaple.com/blog/${this.props.id}`)
    //.then(response => this.setState(response.data))
  }

  tempHardCodeUser() {
    const currentEmail = localStorage.getItem("Email");
    this.setState({
      currentUserEmail: currentEmail
    })
    // currUsrEm is still null here
    console.log("tmpHCU curEm: " + this.state.currentUserEmail)
  }

  componentDidUpdate() {
    //console.log("compDidUpdate rating: " + this.state.rating)
    console.log("compDidUpdate curEm: " + this.state.currentUserEmail)
    console.log("compDidUpdate entEm: " + this.state.enteredEmail)
  }

  handleOptionChange(changeEvent) {
    this.setState({
      rating: changeEvent.target.value
    });
  }

  handleClick(event) {
    this.setState({
      rating: event.target.value
    });

    let id = 5;
    let email = "aar@aol.com";

    // axios.post('/api/ratings', {
    //   rating: event.target.value,
    //   email: email
    // })
    //   .then(res =>  console.log("ratingCmp - hClk - res.data: " + JSON.stringify(res.data)))
    //   .catch(err => console.log(err))

    //axios.post(`/api/testing`).then(res =>  console.log(res.data))
  }

  // email is entered and saved to container
  // when submit button is pressed
  // hndSub sends a get to see if user can be rated
  handleSubmit(e) {
    e.preventDefault()
    const sender = localStorage.getItem("Id");

    axios.post(`/api/profile/${sender}/ratings/contracts`, {
      // params: {
      currentUserEmail: this.state.currentUserEmail,
      enteredEmail: this.state.enteredEmail
      //}
    })
      .then(res => console.log("hSub - res.data: " + JSON.stringify(res.data)))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className='row'>
        <div className='col-sm-8 offset-sm-2'>
          <form onSubmit={this.handleSubmit}>
            <h4>Rate A User</h4>
            <div className="text-left margin-bottom">
              <label>Email address</label>
              <input
                // value={email}
                onChange={e => this.setState({ enteredEmail: e.target.value })}
                type="email"
                className="form-control"
                placeholder="Enter email"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block rating-button">Submit</button>
          </form>

          <p><br/>User Can Be Rated</p>
          <div className="text-left">Rating

            <form>
            {/*<p className="text-left">Rating</p>*/}
            <fieldset className="rating text-left">
              <input type="radio" id="star5" name="rating" value="5"
                   //checked={this.handleClick}
                   //checked={this.state.rating === '5'}
                   onClick={this.handleClick}
                   onChange={this.handleOptionChange}
                   />
            <label className = "full" htmlFor="star5" title="Awesome - 5 stars"/>
            {/*<input type="radio" id="star4half" name="rating" value="4.5" />*/}
            {/*<label className="half" htmlFor="star4half" title="Pretty good - 4.5 stars"/>*/}
            <input type="radio" id="star4" name="rating" value="4"
                   //checked={this.state.rating === '4'}
                   onClick={this.handleClick}
                   onChange={this.handleOptionChange}/>
            <label className = "full" htmlFor="star4" title="Pretty good - 4 stars"/>
            {/*<input type="radio" id="star3half" name="rating" value="3.5" />*/}
            {/*<label className="half" htmlFor="star3half" title="Meh - 3.5 stars"/>*/}
            <input type="radio" id="star3" name="rating" value="3"
                   //checked={this.state.rating === '3'}
                   onClick={this.handleClick}
                   onChange={this.handleOptionChange}/>
            <label className = "full" htmlFor="star3" title="Meh - 3 stars"/>
            {/*<input type="radio" id="star2half" name="rating" value="2.5" />*/}
            {/*<label className="half" htmlFor="star2half" title="Kinda bad - 2.5 stars"/>*/}
            <input type="radio" id="star2" name="rating" value="2"
                   //checked={this.state.rating === '2'}
                   onClick={this.handleClick}
                   onChange={this.handleOptionChange}/>
            <label className = "full" htmlFor="star2" title="Kinda bad - 2 stars"/>
            {/*<input type="radio" id="star1half" name="rating" value="1.5" />*/}
            {/*<label className="half" htmlFor="star1half" title="Meh - 1.5 stars"/>*/}
            <input type="radio" id="star1" name="rating" value="1"
                   //checked={this.state.rating === '1'}
                   onClick={this.handleClick}
                   onChange={this.handleOptionChange}/>
            <label className = "full" htmlFor="star1" title="Sucks big time - 1 star"/>
            {/*<input type="radio" id="starharslf" name="rating" value=".5" />*/}
            {/*<label className="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars"/>*/}
          </fieldset>
        </form>
          </div>

        </div>
      </div>
    );
    }

}

export default RatingContainer;