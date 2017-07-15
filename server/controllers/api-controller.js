/**
 * Created by Miguel on 7/13/2017.
 */

const express = require('express')
const path = require("path")
const User = require('../models/user')

module.exports = function(app) {
  const router = express.Router();

  router.post('/api/ratings/:id', (req, res) => {

    //console.log("req.params: " + JSON.stringify(req.params.id));

    let x = Object.keys(req.body);
    x = x[0];
    // console.log("req.body: " + JSON.stringify(req.body));

    // let foundUser = User.findOne({ 'email': 'aar@aol.com'});
    //
    // foundUser.select('email rating')
    //
    // foundUser.exec((err, user) => {
    //   if (err) {
    //     console.log(err)
    //   }
    //   else {
    //     console.log("foundUser: " + user);
    //   }
    // })

    User.update({"email": "aar@aol.com"}, {$set: {rating: parseFloat(x)}}, (err, numAffected) => {
      if (err) {
        throw err;
      }

      console.log("numAffected: " + JSON.stringify(numAffected))

    })

    User.findOne( {"email": "aar@aol.com"}, 'email rating', (err, user) =>{
      if (err) {
        throw err;
      }
      console.log("User.findOne user: " + user);

    })

    res.json(req.params.id);

  });

  // Set url for api routes
  // could do app.use('/api', router); and then wouldn't have to add /api to each endpoint
  app.use('/', router);

}

