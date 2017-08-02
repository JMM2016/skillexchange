/**
 * Created by Miguel on 7/23/2017.
 */

import React, { Component } from 'react';
import axios from 'axios';
// import Link from 'react-router';
var Link = require("react-router").Link;

// show all of logged-in user's active contracts
const divStyle = { marginBottom: 10 }

class ShowUsersContainer extends Component {
  constructor(props) {
    super(props);
    // console.log("in constrtr: props: " + props.currEmail)

    this.state = {
      currentUserEmail: props.currEmail,
      contracts: [],
      id: props.id
    }
    this.fetchContracts = this.fetchContracts.bind(this);
  }

  // componentWillMount() {
  //   //this.fetchContracts()
  //   console.log("cmpWillMnt - st.cUEm: " + this.state.currentUserEmail)
  //   console.log("cmpWillMnt - pr.cUEm: " + this.props.currEmail)
  // }

  componentDidMount() {
    console.log("cmpDIDMnt - st.cUEm: " + this.state.currentUserEmail)
    //console.log("cmpDIDMnt - pr.cUEm: " + this.props.currEmail)
    this.fetchContracts()
  }

  fetchContracts() {
    let currEmail = this.state.currentUserEmail; // this.props.currEmail;

    console.log("in fetchContracts - currEm: " + currEmail )
    const sender = localStorage.getItem("Id");

    axios.get(`/api/profile/${sender}/contracts/active/${currEmail}`)
      .then(res => {

        // will just send in res - an array of contracts
        let contracts = res.data.userData;
        console.log("ShoCC: GET active/:email cons: " + JSON.stringify(contracts))

        if (contracts) {
          contracts = contracts.map(contracts => {

            let accepted;
            if (contracts.accepted) {
              accepted = "Signed"
            }
            else {
              accepted = <Link to={`/Profile/${this.state.id}/ViewContract/${contracts._id}`}>Pending</Link>
            }

            let date;
            if (contracts.dueDate) {
              date = contracts.dueDate.substr(0, 10)
            }
            else {
              date = "n/a"
            }

            return <tr key={contracts._id}>
              <td>{contracts.otherUsersEmail}</td>
              <td>{contracts.title}</td>
              <td>{date}</td>
              <td>{accepted}</td>
            </tr>
          })

          console.log("array-ed cons: " + JSON.stringify(contracts));

          this.setState({contracts: contracts})
        }
      })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <p style={divStyle}>Your Active Contract(s):</p>
        <table className="table table-striped">
          <thead className="thead-inverse">
          {/*<tr>*/}
          {/*<td>User</td>*/}
          {/*<td>Title</td>*/}
          {/*<td>Due Date</td>*/}
          {/*<td>Accepted</td>*/}
          {/*</tr>*/}
          </thead>
          <tbody>
          {this.state.contracts}
          </tbody>
        </table>
      </div>
    )
  }
}

export default ShowUsersContainer;