// Server routes
// =============
// Require our dependencies
var express = require("express");
// Instantiate our Express App
var app = express();
// Set up an Express Router
var router = express.Router();


module.exports = function (router) {
    router.route('/user')

    // Create a new user...
        .post(function (req, res) {
            var user = new User();
            user.name = req.body.name;
            // ... and save new user...
            user.save(function (err) {
                if (err)
                    res.send(err);
                res.json({message: 'User created!'});
            });
        })

        // Find all users...
        .get(function (req, res) {
            User.find(function (err, users) {
                if (err)
                    res.send(err);
                res.json(users);
            });
        });
    app.use('/api', router);
};
