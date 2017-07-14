var express = require('express');  
app = express();  
var mongoose = require('mongoose'); 

var bodyParser = require('body-parser');  
var morgan = require('morgan');  
var passport = require('passport'); 
var config = require('./config/main'); 

// var User = require('./app/models/user');  
// var jwt = require('jsonwebtoken');  

// Use body-parser to get POST requests for API use
// Use body-parser to get POST requests for API use
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());

var PORT = process.env.PORT || 5000;

app.use(express.static("public"));

// Log requests to console
app.use(morgan('dev'));  

mongoose.connect(config.database); 

// // Initialize passport for use
app.use(passport.initialize());  
// // And now we can import our JWT passport strategy. Enter this below our mongoose connection:

// Bring in defined Passport Strategy
require('./config/passport')(passport);  

require('./app/routes')(app);
// require('./app/routes2')(app);


// We will add a quick home page route so I can give a quick demonstration of what morgan does. Add this next.
// Home route. We'll end up changing this to our main front end index later.
app.get('/', function(req, res) {  
  // res.send('Relax. We will put the home page here later.');
  res.sendFile(__dirname + "/public/index.html")
});

app.get('/api/profile/:id', function(req, res) {
  console.log("id here")  
  // res.send('Relax. We will put the home page here later.');
  res.sendFile(__dirname + "/public/profile.html")
});





app.listen(PORT, function() {
	console.log('Your server is running on port ' + PORT + '.');
});  
  