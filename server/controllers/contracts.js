/**
 * Created by Miguel on 7/22/2017.
 */

const express = require('express')
const User = require('../models/user')

const router = express.Router();

router.post('/', (req, res) => {

  console.log("POST contracts/ - req.body: " + JSON.stringify(req.body))

  let currUserEm = req.body.currentUserEmail;
  let otherEm = req.body.enteredEmail;
  let title = req.body.title;
  let body = req.body.body;
  let date = req.body.date;
  //let updatedCurrentUser = false;
  //let updatedOtherUser = false;
  //let updatedBoth = false;

  User.findOneAndUpdate( { email: otherEm },
    { $push: { contracts: {
      otherUsersEmail: currUserEm,
      title: title,
      body: body,
      dueDate: date,
      accepted: false
    }}}, {new: true}, (err, updatedUser) => {
      if (err) return console.error("Error in api/contracts/ " + err);
      console.log(`updated ${otherEm}: ${updatedUser}`);

      if (updatedUser) {
        // search users for current user's email
        // add the contract
        // do/don't allow dups (check email & title & body)?
        User.findOneAndUpdate( { email: currUserEm },
          { $push: { contracts: {
            otherUsersEmail: otherEm,
            title: title,
            body: body,
            dueDate: date,
            accepted: true
          }}}, {new: true}, (err, foundUser) => {
            if (err) return console.error(err);

            if(foundUser) {
              res.json({msg: "/api/contracts POST: add contract to both users!", addedContract: true});
            }
            else {
              res.json({msg: "/api/contracts POST: didn't add contract", addedContract: false});
            }

            console.log(`updated ${currUserEm}: ${foundUser}`);;
          }
        )
      }
      else {
        res.json({msg: "/api/contracts POST: didn't add contract", addedContract: false});
      }


    }
  )
})

router.get('/users/all/active', (req, res) => {
  // easiest: return all users
  // better: only return users who have something in contracts
  // best: only return users with active contracts

  User.find({contracts: { $elemMatch: { active: true}}}, (err, res) => {
  //User.find({contracts: { $elemMatch: { title: "Something" }}}, (err, res) => {
    if (err) return console.error("Error in api/contracts/users " + err);

    console.log("in contracts/users w00t! \n" + JSON.stringify(res, null, 2))
  })

  res.json("in api/contracts/users GET")
})


router.get('/active/:email', (req, res) => {

  const currEmail = req.params.email;
  console.log("params.email: " + JSON.stringify(currEmail) )

  // could just get all the user's contracts, filter out the inactive ones and
  // then send only those, MIGHT still have to.
  User.findOne( {$and: [ {email: currEmail}, {contracts: { $elemMatch: { active: true}}}]}, (err, found) => {
  //User.findOne( {email: currEmail}, (err, data) => {
    if (err) return console.error("Error in api/contracts/active/:email \n" + err);

    let contracts = found.contracts;

    // filter out inactive contracts
    contracts = contracts.filter( contract => {
      return contract.active !== false
    })

    console.log("contracts: " + contracts + "  type: " + typeof contracts)

    // console.log("in contracts/active/" + currEmail +
    //   "\n" + JSON.stringify(found, null, 2));

    res.json({msg: `in GET api/contracts/active/${currEmail}`, userData: contracts})
  })

})

module.exports = router;