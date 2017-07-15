// Require our dependencies
var express = require("express");
// Instantiate our Express App
var app = express();
var mongoose = require("mongoose");
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var db = process.env.MONGODB_URI || "mongodb://localhost/skillexchange";
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Designate our public folder as a static directory
app.use(express.static(__dirname + "/public"));

var app = express();
// Set up our port to be either the host's designated port, or 3000
var PORT = process.env.PORT || 3000;

// Set up an Express Router
var router = express.Router();

app.use(router)
// Require our routes files and pass our router object
require("./config/userRoutes")(router);

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res) {
    res.send('index');
});

// app.use('/api', router);

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

// Listen on the port
app.listen(PORT, function () {
    console.log("Listening on port:" + PORT);
});