// Server routes
// =============
// Require our dependencies
var express = require("express");
// Instantiate our Express App
var app = express();
// Set up an Express Router
var router = express.Router();

// Bring in the Headline and Note mongoose models
var Headline = require("../models/Headline");



module.exports = function (router) {
    router.route('/user')

  // router.route('/user')

Create a new user...
router.post("/user", function (req, res) {
    var user = new User();
    user.firstName = req.body.firstname;
    // ... and save new user...
    user.save(function (err) {
        if (err)
            res.send(err);
        res.json({message: 'User created!'});
    });
});

// Find all users...
router.get("/user", function (req, res) {
    User.find(function (err, users) {
        if (err)
            res.send(err);
        res.json(users);
    });
});

app.use('/api', router);
// };
