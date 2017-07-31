const express = require('express')
const User = require('../User')
const router = express.Router();

const addUser = (data) => {
  let newUser = new User({
    email: data.email,
    password: "test",
    rating: 0,
    numOfRatings: 0
  })

  newUser.save( (err, user) => {
    if (err) return console.error(err);
    console.log("newly saved user: " + user);
  }).catch(err => console.error(err))
}

const updateUser = (userData, updateData) => {

  User.findOneAndUpdate({email: userData.currEmail}, updateData, (err, found) => {
    if (err) return console.error(err);

    // provides the updated user but data is pre-update
    console.log("user, pre update: " + JSON.stringify(found))

    User.findOne({email: userData.currEmail}, (err, user) => {
      if (err) return console.error(err);

      console.log("user, after update: " + user);
    })
  })
}


router.get('/test', (req, res) => {

  addUser({
    email: "jax@aol.com",
    //otherEmail: "frank@aol.com",
    title: "Video lessons",
    body: "We'll trade 3 hours of video lessons for 3 hours of cooking lessons. Due by the end of August 2017"
  })

  res.json({reply: '/api/ratings/test GET worked!'})
})


router.post('/test', (req, res) => {
  res.json({"aKey": "some response data from api/test"})
})

router.post('/profile/:id/ratings/contracts', (req, res) => {
  // check if the entered user's email is in the current user's contracts

  let otherEm = req.body.enteredEmail;

  // addUser({
  //   email: "tom@aol.com",
  //   otherEmail: otherEm,
  //   title: "Video lessons",
  //   body: "We'll trade 3 hours of video lessons for 3 hours of cooking lessons. Due by the end of August 2017"
  // })

  let currUserEm = req.body.currentUserEmail;

  console.log("current user's email: " + currUserEm);

  // find current user
  User.findOne({email: currUserEm}, (err, user) => {
    if (err) return console.error(err);

    //console.log("user in findOne: " + user);
  }) // search in current user's contracts
    .then( (found) => {

      console.log("other email: " + otherEm)

      if (found) {
        let foundContract = found.contracts.filter((contract) => {
          return contract.otherUsersEmail === otherEm && contract.active === true;
        })

        console.log("foundContract: " + foundContract.length);

        if (foundContract.length !== 0) {
          res.json({found: true, active: true})
        }
        else {
          res.json({found: true, active: false})
        }
      }
      else {
        res.json({found: false, active: false})
      }
  })

  //res.json({response: '/api/ratings/check-contract POST worked!'})
})


module.exports = router;

