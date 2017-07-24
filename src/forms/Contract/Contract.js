import React, { Component } from 'react';
import axios from 'axios';
import ShowContractsContainer from '../../containers/ShowContractsContainer/ShowContractsContainer'

const divStyle = { marginBottom: 10 }
const height = {height: 150}

const BottomMsg = (props) => (
  <h5>{props.msgtop}<br />
    {props.msgbot}</h5>
)

export default class Contract extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUserEmail: '',
      enteredEmail: '',
      title: '',
      body: '',
      date: '',
      contractAdded: '',
      submitted: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.tempHardCodeUser = this.tempHardCodeUser.bind(this);
  }

  componentWillMount() {
    this.tempHardCodeUser()
  }

  tempHardCodeUser() {
    this.setState({
      currentUserEmail: 'ace@aol.com'
    })
    // currUsrEm is still null here
    //console.log("tmpHCU curEm: " + this.state.currentUserEmail)
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post('api/contracts', {
      currentUserEmail: this.state.currentUserEmail,
      enteredEmail: this.state.enteredEmail,
      title: this.state.title,
      body: this.state.body,
      date: this.state.date
      //body: "Trading 2hrs of sewing lessons for 2lbs of tomatoes. Due by 7/29/17"
    })
      .then(res => {
        console.log("hSub - res.data: " + JSON.stringify(res.data))
        this.setState({submitted: true})

        this.setState({contractAdded: res.data.addedContract})
        this.forceUpdate(() => {
          console.log("fUp - contractAdded: " + this.state.contractAdded)
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    const submitted = this.state.submitted;
    let bottomComp = null;

    if ( submitted ) {
      const contractAdded = this.state.contractAdded;

      if (contractAdded) {
        bottomComp = <BottomMsg msgtop="Contract has been created."
                                msgbot="Other user needs to accept." />
      }
      //else if (!contractAdded){
      else {
        //console.log("in else in render")
        //bottomComp = <BottomMsg msgtop="Other user hasn't signed contract"/>
        bottomComp = <BottomMsg msgtop="No such user exists"/>
      }
    }

    // let showUsersComp = null;
    // let haveUsers = true; // this.state.haveUsers
    //
    // if (haveUsers) {
    //   showUsersComp = <ShowContractsContainer currEmail={this.state.currentUserEmail} />
    //   //showUsersComp = <ShowContractsContainer currEmail="ace@aol.com" />
    // }
    // else {
    //   showUsersComp = <h6>No Users To Show !</h6>
    // }

    return (
      <div className='row'>
        <div className='col-sm-8 offset-sm-2'>
          <form style={divStyle} onSubmit={this.handleSubmit}>
            <h4>Contracts</h4>
            <div style={divStyle} className="text-left">
              <label>Email</label>
              <input
                // value={email}
                onChange={e => this.setState({enteredEmail: e.target.value})}
                type="email"
                className="form-control"
                placeholder="Enter email of other user"
                required
              />
            </div>

            <div style={divStyle} className="text-left">
              <label>Title</label>
              <input
                // value={email}
                onChange={e => this.setState({title: e.target.value})}
                type="text"
                className="form-control"
                placeholder="Enter title"
                required
              />
            </div>

            <div style={divStyle} className="text-left">
              <label>Due Date</label>
              <input
                // value={email}
                onChange={e => this.setState({date: e.target.value})}
                type="date"
                className="form-control"
                //placeholder="Enter title"
                // required
              />
            </div>

            <div style={divStyle} className="text-left">
              <label>Details</label>
                {/*value={email}*/}
                {/*type="textarea"*/}
              <textarea style={height} className="form-control"
                onChange={e => this.setState({body: e.target.value})}
                placeholder="Enter details"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block rating-button">Submit</button>
          </form>

          {bottomComp}
          <br />
          {/*{showUsersComp}*/}
          <ShowContractsContainer currEmail={this.state.currentUserEmail} />

          {/*<Bottom />*/}
        </div>
      </div>
    )
  }

}