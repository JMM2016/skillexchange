// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var passport = require('passport'); 
var config = require('./app/config/passportSecret');
var methodOverride = require('method-override')
const index = require('./server/controllers/index');

// Create Instance of Express
var app = express();

app.use(methodOverride('_method'))

// Set up an Express Router
var router = express.Router();
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));


app.use(express.static("./public"));
app.use('/api', index);


// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var db = process.env.MONGODB_URI || "mongodb://localhost/skillexchange";

// Connect mongoose to our database
mongoose.connect(db, function (error) {
    // Log any errors connecting with mongoose
    if (error) {
        console.log(error);
    }
    // Or log a success message
    else {
        console.log("mongoose connection is successful");
    }
});

var User = require("./server/User");

// -------------------------------------------------
// ROUTES
// -------------------------------------------------

// Middleware to use for all requests
router.use(function (req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// // Test route to make sure everything is working (accessed at GET http://localhost:8080/api)
// router.get('/', function (req, res) {
//     res.send('test page working!');
// });

// USER ROUTES
// -------------------------------------------------
// Create a new user
app.post('/api/user', function (req, res) {

    var user = new User();
    user.firstName = req.body.firstname;
    user.have = req.body.have;
    user.need = req.body.need;
    user.street = req.body.street;
    user.city = req.body.city;
    user.state = req.body.state;
    user.bio = req.body.bio
    // ... and save new user...
    user.save(function (err) {
        if (err)
            res.send(err);
        res.json({message: 'User created!'});
    });
});

// Find all users
app.get('/api/user', function (req, res) {
    User.find(function (err, users) {
        if (err)
            res.send(err);
        res.json(users);
    });
})

// Find specific user
app.get('/api/user/:user_id',function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        console.log(err);
        res.json(user);
        console.log(user);
    });
});

// NEED SEARCH ROUTE

app.get("/api/need/:need_searched", function (req, res) {
    User.find({need: req.params.need_searched}, function (err, user) {
        if (err)
            res.send(err);
        console.log(err);
        res.json(user);
        console.log(user);
    });
});

app.get("/api/have/:have_searched", function (req, res) {
    User.find({have: req.params.have_searched}, function (err, user) {
        if (err)
            res.send(err);
        console.log(err);
        res.json(user);
        console.log(user);
    });
});

app.put("/api/update/:user_id", function (req, res) {
    // This would likely be inside of a PUT request, since we're updating an existing document, hence the req.params.todoId.
// Find the existing resource by ID

    User.findById(req.params.user_id, function (err, data) {
        // Handle any possible database errors
        if (err) {
            res.status(500).send(err);
        } else {

            // Update each attribute with any possible attribute that may have been submitted in the body of the request
            // If that rattribute isn't in the request body, default back to whatever it was before.
            data.street = req.body.street
            data.city = req.body.city
            data.state = req.body.state
            data.need = req.body.need
            data.have = req.body.have
            data.bio = req.body.bio

            // Save the updated document back to the database
            data.save({ validateBeforeSave: false }, function (err, update) {
                if (err) {
                    res.status(500).send(err)
                }
                console.log(update);
            });
        }
    });
});

// Any non API GET routes will be directed to our React App and handled by React Router

app.use(passport.initialize());  

require('./app/config/passport')(passport);  

//Do i still need to require the apiRoutes? 
// Or does react w/ helpers.js will do the job instead?
require('./app/config/apiRoutes')(app);

app.get("*", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

// Listen on the port
app.listen(PORT, function () {
    console.log("Listening on port:" + PORT);
});


