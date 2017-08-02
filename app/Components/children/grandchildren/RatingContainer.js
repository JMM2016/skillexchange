/**
 * Created by Miguel on 7/16/2017.
 */

import React, { Component } from 'react';
//import {Link} from 'react-router-dom'
import './RatingContainer.css';
import axios from 'axios';
var Link = require("react-router").Link;
var router = require("react-router");

const Msg = (props) => (
  <h4>{props.msg}</h4>
)

// const StarRating = () => ()

class RatingContainer extends Component {
  constructor(props) {
    super(props);

    // loggedEmail could be their _id
    this.state = {
      rating: 0,
      currentUserEmail: '',
      enteredEmail: '',
      found: null,
      submit: false,
      avgRating: null
    }

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.tempHardCodeUser = this.tempHardCodeUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRateSubmit = this.handleRateSubmit.bind(this);
    this.reset = this.reset.bind(this);
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
    // this.setState({
    //   rating: changeEvent.target.value
    // });
  }

  handleClick(event) {
    this.setState({
      rating: event.target.value
    });
  }

  handleRateSubmit(e) {
    e.preventDefault()
    if (this.state.found) {
      // if (e.target.value) {
      //   this.setState({
      //     rating: e.target.value
      //   });
      //   console.log("hRS value: " + e.target.value)
      // }
      // this.setState({
      //   found: false
      // });

      console.log("hRS Boom!!");


      if (this.state.enteredEmail && this.state.rating) {
        const sender = localStorage.getItem("Id");

        axios.post(`/api/profile/${sender}/ratings`, {
          enteredEmail: this.state.enteredEmail,
          rating: this.state.rating
        })
          .then(res => {
            console.log("hRS - res.data: " + JSON.stringify(res.data))

            this.setState({
              avgRating: res.data.rating
            });

            // this.forceUpdate();
          })
          .catch(err => console.log(err))
      }
    }
  }

  // email is entered and saved to container
  // when submit button is pressed
  // hndSub sends a get to see if user can be rated
  handleSubmit(e) {
    e.preventDefault()

    this.setState({
      submit: true
    })

    const sender = localStorage.getItem("Id");

    axios.post(`/api/profile/${sender}/ratings/contracts`, {
      // params: {
      currentUserEmail: this.state.currentUserEmail,
      enteredEmail: this.state.enteredEmail
      //}
    })
      .then(res => {
        console.log("hSub - res.data: " + JSON.stringify(res.data))

        if (res.data.active) {
          this.setState({
            found: true
          })
        }
        else {
          this.setState({
            found: false
          })
        }
        this.forceUpdate();
      })
      .catch(err => console.log(err))
  }

  reset() {
    this.setState({
      rating: 0,
      enteredEmail: '',
      found: null,
      submit: false,
      avgRating: null
    })
  }

  render() {
    const submit = this.state.submit;
    const found = this.state.found;
    const avgRating = this.state.avgRating;
    let topComp = null;
    let botComp = null;
    let midComp = null;

    let email = <form onSubmit={this.handleSubmit} className="margin-bottom">
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

    if (submit) {
      if (found && avgRating) {
        botComp =
          <h4>User's Average Rating: {this.state.avgRating} <br className="margin-bottom"/>
                  <br/> <Link to={`/Profile/${this.props.params.id}/Rate`} onClick={this.reset}>Rate Another User</Link>
          </h4>
      }
      else if (found) {
        midComp = <Msg msg="Select Rating Below"/>
        //topComp = <StarRating/>
        botComp =  <form onSubmit={this.handleRateSubmit} className="text-center margin-bottom">
          {/*<p className="text-left">Rating</p>*/}
          {/*<label className="text-left">Pick Rating</label>*/}
          <fieldset className="rating text-center">
            <input type="radio" id="star5" name="rating" value="5"
              //checked={this.handleClick}
              //checked={this.state.rating === '5'}
                   onClick={this.handleClick}
                   onChange={this.handleOptionChange}
            />
            <label className="full" htmlFor="star5" title="Awesome - 5 stars"/>
            {/*<input type="radio" id="star4half" name="rating" value="4.5" />*/}
            {/*<label className="half" htmlFor="star4half" title="Pretty good - 4.5 stars"/>*/}
            <input type="radio" id="star4" name="rating" value="4"
              //checked={this.state.rating === '4'}
                   onClick={this.handleClick}
                   onChange={this.handleOptionChange}/>
            <label className="full" htmlFor="star4" title="Good - 4 stars"/>
            {/*<input type="radio" id="star3half" name="rating" value="3.5" />*/}
            {/*<label className="half" htmlFor="star3half" title="Meh - 3.5 stars"/>*/}
            <input type="radio" id="star3" name="rating" value="3"
              //checked={this.state.rating === '3'}
                   onClick={this.handleClick}
                   onChange={this.handleOptionChange}/>
            <label className="full" htmlFor="star3" title="Fair - 3 stars"/>
            {/*<input type="radio" id="star2half" name="rating" value="2.5" />*/}
            {/*<label className="half" htmlFor="star2half" title="Kinda bad - 2.5 stars"/>*/}
            <input type="radio" id="star2" name="rating" value="2"
              //checked={this.state.rating === '2'}
                   onClick={this.handleClick}
                   onChange={this.handleOptionChange}/>
            <label className="full" htmlFor="star2" title="Poor - 2 stars"/>
            {/*<input type="radio" id="star1half" name="rating" value="1.5" />*/}
            {/*<label className="half" htmlFor="star1half" title="Meh - 1.5 stars"/>*/}
            <input type="radio" id="star1" name="rating" value="1"
              //checked={this.state.rating === '1'}
                   onClick={this.handleClick}
                   onChange={this.handleOptionChange}/>
            <label className="full" htmlFor="star1" title="Awful - 1 star"/>
            {/*<input type="radio" id="starharslf" name="rating" value=".5" />*/}
            {/*<label className="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars"/>*/}
          </fieldset>
          <button type="submit" className="btn btn-primary btn-block rating-button">Submit</button>
        </form>
      }
      else if (found === false) {
          topComp = <Msg msg="Sorry, you can't rate that user"/>
          midComp = email;
      }
    }
    else {
      midComp = email;
    }

    return (
      <div className="container">
        <div className='row justify-content-center'>
          {/*<div className='col-sm-8'>*/}
          {/*<div className='col-sm-8 offset-sm-2'>*/}
          {/*<div className="col-lg-2">*/}
          <div className="col-sm-8 offset-sm-2 col-md-8 offset-md-2 col-lg-8 offset-lg-2 text-center">

            {/*<div className='col-sm-8 offset-sm-2 text-center'>*/}
            {topComp}
          </div>

          <div className="col-sm-8 offset-sm-2 col-md-8 offset-md-2 col-lg-8 offset-lg-2 text-left">
        {/*<div className='col-sm-8 offset-sm-2 text-left'>*/}

          {midComp}

          {/*<div className="text-left margin-bottom">*/}

          {/*</div>*/}

            {/*<p>            */}
              {/*{topComp}*/}
            {/*</p>*/}
          {botComp}
        </div>
      </div>
      </div>
    );
    }

}

export default RatingContainer;
