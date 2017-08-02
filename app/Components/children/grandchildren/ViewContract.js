/**
 * Created by Miguel on 8/1/2017.
 */

import React, { Component } from 'react';
import {browserHistory} from 'react-router';

import axios from 'axios';
const divStyle = { marginBottom: 10 }
const height = {height: 150}
const btnStyle = {marginBottom: 10, flex: 1 }

export default class ViewContract extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUserEmail: '',
      otherEmail: '',
      title: '',
      body: '',
      date: '',
      // submitted: ''
    }

    this.fetchContract = this.fetchContract.bind(this)
    this.updateContract = this.updateContract.bind(this)
  }

  fetchContract(){
    const sender = this.props.params.id;
    console.log("in VC, id: ", sender);
    //const currEmail = localStorage.getItem("Email");
    const cid = this.props.params.cid
    console.log("cid: ", cid);

     axios.get(`/api/profile/${sender}/contracts/${cid}`)
       .then(res => {
         if (res.data.contract) {
           console.log("cnt: ", JSON.stringify(res.data.contract, null, 1));

           let {dueDate, body, title, otherUsersEmail} = res.data.contract[0]
           console.log("title: ", title, otherUsersEmail, dueDate);

           if(dueDate){
             dueDate = dueDate.substr(0, 10);
           }
           else {
             dueDate = "0000-00-00";
           }

           this.setState({
             otherEmail: otherUsersEmail,
             date: dueDate,
             body: body,
             title: title
           })
         }
       })
       .catch(err => console.log(err))
  }

  componentWillMount() {
    this.fetchContract();
  }

  updateContract(e){
    e.preventDefault();
    console.log("btn = " + e.target.value);
    const sender = this.props.params.id;
    const cid = this.props.params.cid

    axios.put(`/api/profile/${sender}/contracts`, {
      cid: cid,
      accepted: e.target.value
    })
      .then(res => {

      })
      .catch(err => console.log(err))

    browserHistory.push("Profile/:id/Contract")

  }

  render() {
    return (
      <div>
        {/*<h5>Some Text from ViewContracts <br/>*/}
            {/*/!*Contract Id: {this.props.params.cid}*!/*/}
        {/*</h5>*/}

        <div className="col-sm-8 offset-sm-2 col-md-8 offset-md-2 col-lg-8 offset-lg-2">
          <form style={divStyle} onSubmit={this.handleSubmit}>
            <h4>Pending Contract #{this.props.params.cid}</h4>

            <div style={divStyle} className="text-left">
              <label>User's Email</label>
              <input
                value={this.state.otherEmail}
                //onChange={e => this.setState({enteredEmail: e.target.value})}
                type="email"
                className="form-control"
                //placeholder="Enter email of other user"
                required
                readOnly
              />
            </div>

            <div style={divStyle} className="text-left">
              <label>Title</label>
              <input
                value={this.state.title}
                //onChange={e => this.setState({title: e.target.value})}
                type="text"
                className="form-control"
                //placeholder={this.state.title}
                required
                readOnly
              />
            </div>

            <div style={divStyle} className="text-left">
              <label>Due Date</label>
              <input
                value={this.state.date}
                //onChange={e => this.setState({date: e.target.value})}
                type="date"
                className="form-control"
                //placeholder="Enter title"
                // required
                readOnly
              />
            </div>

            <div style={divStyle} className="text-left">
              <label>Details</label>
              {/*value={email}*/}
              {/*type="textarea"*/}
              <textarea style={height}
                        value={this.state.body}
                        className="form-control"
                        //onChange={e => this.setState({body: e.target.value})}
                        //placeholder="Enter details"
                        required
                        readOnly
              />
            </div>
            {/*<div className="col-sm-4 offset-sm-2 col-md-4 offset-md-2 col-lg-4 offset-lg-2">*/}
            <div style={btnStyle} className="col-sm-6">
                 {/*className="col-lg-4 offset-lg-3">*/}
              <button type="submit" className="btn btn-primary btn-block" value={1} onClick={e => this.updateContract(e)}>Accept</button>
            </div>
            {/*<div style={divStyle} className="col-sm-4 offset-sm-2 col-md-4 offset-md-2 col-lg-4 offset-lg-2">*/}
            <div style={btnStyle} className="col-sm-6">
                  {/*className="col-lg-4 offset-lg-3">*/}
              <button type="submit" className="btn btn-danger btn-block" value={0} onClick={e => this.updateContract(e)}>Decline</button>
            </div>
          </form>

        </div>
      </div>
    )
  }

}