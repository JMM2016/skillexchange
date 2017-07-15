// Controller for our headlines
// ============================

// Bring in the Headline and Note mongoose models
var User = require("../models/User");

module.exports = {
  get: function(query, cb) {
    // Prepare a query to get the User we want
    User.find(query)
      .sort({
        _id: -1
      })
      // Execute this query
      .exec(function(err, doc) {
        // Once finished, pass the list into the callback function
        cb(doc);
      });
  },
  update: function(query, cb) {
    // Update the headline with the id supplied
    // set it to be equal to any new values we pass in on query
    Headline.update({ _id: query._id }, {
      $set: query
    }, {}, cb);
  }
};
