// Server routes
// =============

// Bring in the Headline and Note mongoose models
// var User = require("../models/User");


module.exports = function (router) {

    // middleware to use for all requests
    router.use(function (req, res, next) {
        // do logging
        console.log('Something is happening.');
        next(); // make sure we go to the next routes and don't stop here
    });

    // test route to make sure everything is working (accessed at GET http://localhost:8080/api)
    router.get("/", function (req, res) {
        res.render("index");
    });

    // Middleware to use for all requests
    router.use(function (req, res, next) {
        // do logging
        console.log('Something is happening.');
        next(); // make sure we go to the next routes and don't stop here
    });


    // USER ROUTES
    router.route('/user')

    // Create a new user...this is just a test
        .post(function (req, res) {
            var user = new User();
            user.firstName = req.body.firstname;
            user.skills = req.body.skills;
            user.needs = req.body.needs;
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
        })

    router.route('/user/:user_id')

    // Find specific user
        .get(function (req, res) {
            User.findById(req.params.user_id, function (err, user) {
                if (err)
                    res.send(err);
                console.log(err);
                res.json(user);
                console.log(user);
            });
        });

    // NEED SEARCH ROUTE
    router.route('/user/needs/:user_need')

        .get(function (req, res) {
            User.find({needs: req.user_need}, function (err, user) {
                if (err)
                    res.send(err);
                console.log(err);
                res.json(user);
                console.log(user);
            });
        });

    // SKILL SEARCH ROUTE
    router.route('/user/skills/:user_skill')

        .get(function (req, res) {
            User.find({skills: req.params.user_skill}, function (err, user) {
                if (err)
                    res.send(err);
                console.log(err);
                res.json(user);
                console.log(user);
            });
        });
};
