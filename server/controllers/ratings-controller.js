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


router.post('/profile/:id/ratings', (req, res) => {

  let enteredEmail = req.body.enteredEmail;
  let newRating = parseInt(req.body.rating, 10);

  console.log("enteredEmail: ", typeof enteredEmail)
  console.log("newRating: ", typeof newRating)

  User.findOne( { email: enteredEmail }, (err, user) => {
    if (err) return console.error("Error in /ratings - findOne() \n" + err);

    if (user) {

      console.log("user: ", JSON.stringify(user, null, 2))

      let numOfRatings = user.numOfRatings;
      let rating = user.rating

      //if (user.numOfRatings) {
      //  numOfRatings = user.numOfRatings;
      // }
      // else {
      //   console.log(" user numOfRatings is null " + user.numOfRatings + " " + typeof user.numOfRatings)
      // }

      //if (user.rating) {
      // rating = user.rating;
      // }
      // else {
      //   console.log("user ratings is null " + user.rating)
      // }

      console.log("numRatings: ", typeof numOfRatings)
      console.log("let rating:", typeof  rating)

      rating += newRating;
      console.log("rating after += newRating: ", rating);
      numOfRatings++;

      const updateData = {rating: rating, numOfRatings: numOfRatings}

      rating = rating / numOfRatings;

      rating = rating.toFixed(2);

      // update both keys in db
      // looks like method defaults to $set
      User.findOneAndUpdate({email: enteredEmail}, updateData, {new: true}, (err, updatedUser) => {
        if (err) return console.error("Error in /ratings - findOneAndUpdate() \n" + err);
        console.log("Updated user rating: " + JSON.stringify(updatedUser.rating, null, 2))
        res.json({msg: "/add-rating POST: user updated", rating: rating});
      })
    }
  })
  //res.json({avgRating: 4.5})
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


router.get('/profile/:id/ratings', (req, res) => {
  const email = req.query.email;

  console.log("in ratings/ GET, email: ", email)

  User.findOne({email: email}, (err, user) => {
    if (err) return console.error(err);

    console.log("user: ", user);

    let rating = user.rating;
    const numOfRatings = user.numOfRatings;

    rating = rating / numOfRatings;
    rating = rating.toFixed(2);

    res.json({rating: rating});
  })

})

module.exports = router;

