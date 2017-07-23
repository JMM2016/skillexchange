// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Create Instance of Express
var app = express();
// Set up an Express Router
var router = express.Router();
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

app.use(router)

app.use(express.static("./public"));

// Require our routes files and pass our router object
// require("./config/userRoutes")(router);

app.use('/api', router);

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

// Any non API GET routes will be directed to our React App and handled by React Router
app.get("*", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

// Listen on the port
app.listen(PORT, function () {
    console.log("Listening on port:" + PORT);
});