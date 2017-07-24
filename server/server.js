// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// Set mongoose to leverage built-in JavaScript ES6 Promises
mongoose.Promise = Promise;
const path = require("path")
const index = require('./controllers/index');


// Initialize Express
var app = express();

const PORT = process.env.PORT || 4001;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())
app.use(bodyParser.json({ type: "application/vnd.api+json" }))

// Make public a static dir
app.use(express.static(path.join(__dirname, "../public")));

// set up db connection
mongoose.connect('mongodb://localhost:27017/saastest');
const db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Import routes and give the server access to them.
//require("./controllers/html-controller.js")(app);
//require("./controllers/api-controller.js")(app);
app.use('/api', index);

// Listen on port 4001
app.listen(PORT, function() {
  console.log(`App running on port ${PORT}!`);
});