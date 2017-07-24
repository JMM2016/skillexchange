/**
 * Created by Miguel on 7/23/2017.
 */

import React, { Component } from 'react';
import axios from 'axios';

// search for users with contracts
// those contract can be active or closed
// active can be signed or unsigned
// will only show signed and unsigned

// Can I easily check if a user has any contracts?
// If so then, return from db into server and then only send
// users that haven't "active" contracts

// show all of logged-in user's active contracts
// then display only their email addresses

class ShowUsersContainer extends Component {
  constructor(props) {
    super(props);
    // console.log("in constrtr: props: " + props.currEmail)

    this.state = {
      currentUserEmail: props.currEmail,
      contracts: []
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

    axios.get(`api/contracts/active/${currEmail}`)
      .then(res => {

        // will just send in res - an array of contracts
        let contracts = res.data.userData;
        console.log("ShoCC: GET active/:email cons: " + JSON.stringify(contracts))

        contracts = contracts.map(contracts => {

          let accepted;
          if (contracts.accepted) {
            accepted = "Signed"
          }
          else {
            accepted = "Pending"
          }

          let date;
          if (contracts.dueDate) {
            date = contracts.dueDate.substr(0,10)
          }

          return <div key={contracts._id}>
            {contracts.otherUsersEmail} | {contracts.title} | { date} | {accepted}
          </div>
        })

        console.log("array-ed cons: " + JSON.stringify(contracts));

        this.setState({contracts: contracts})
      })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        Your Active Contract(s):<br />
        {/*Props: <br />*/}
        {/*{this.props.currEmail}*/}
        {/*<br /> <br />*/}
        {/*State: <br />*/}
        {/*{this.state.currentUserEmail}*/}
        {/*<br /> <br />*/}
        {/*Active Contract(s):<br />*/}
        {this.state.contracts}
      </div>
    )
  }
}

export default ShowUsersContainer;