// Import dependencies
var passport = require('passport');  
var express = require('express');  
var config = require('./passportSecret');  
var jwt = require('jsonwebtoken');


// Load models
var User = require('../../server/User');
var Chat = require('../models/chat'); 

// Export the routes for our app to use
module.exports = function(app) {  
  // API Route Section

  // Initialize passport for use
  app.use(passport.initialize());

  // Bring in defined Passport Strategy
  var pport = require('./passport');
  pport(passport);

  // Create API group routes
  var apiRoutes = express.Router();

  // Register new users
  apiRoutes.post('/signup', function(req, res) {

    console.log("req.body", req.body)
    
    if(!req.body.email || !req.body.password || !req.body.firstName || !req.body.lastName) {
      res.json({ success: false, message: 'Please fill in all fields' });
    } else {

      var newUser = new User({
     
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName
      });

      // Attempt to save the user
      newUser.save(function(err) {
        
        if (err) {
          return res.json({ success: false, message: 'That email address already exists.'});
        }

        // console.log('newUser', newUser)
        
        res.json({ 
          success: true, 
          message: 'Successfully created new user.',
          id: newUser._id,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          email: newUser.email,
          password: newUser.password,
          userName: newUser.userName
        });
      });
    }
  });

  // Authenticate the user and get a JSON Web Token to include in the header of future requests.
  apiRoutes.post('/login', function(req, res) {
    // console.log("yyyyyyyyy")
    User.findOne({
      email: req.body.email
    }, function(err, user) {
      if (err) throw err;

      console.log("user", user)

      if (!user) {
        res.json({ success: false, message: 'Authentication failed. Please try again. ' });
      } else {
        // Check if password matches
        user.comparePassword(req.body.password, function(err, isMatch) {
          if (isMatch && !err) {
            // Create token if the password matched and no error was thrown
            var token = jwt.sign(user, config.secret, {
              expiresIn: 10080 // in seconds
            });

            res.json({ 
              message: "Welcome back " + user.firstName,
              success: true, 
              token: 'JWT ' + token,
              id: user._id 
            });
          } else {
            res.json({ success: false, message: 'Authentication failed. Please try again.' });
          }
        });
      }
    });
  });

  apiRoutes.get("/profile/:id", function(req, res) {
    
    console.log("profile id", req.params.id);

    User.findOne({
      _id: req.params.id
    }, function(err, user) {

      if(err) throw err;

      console.log("profile user", user)

      res.json({
        message: "Hello world",
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName
      });
    })
  });


  apiRoutes.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
    console.log("You here??")
  });


  // Protect chat routes with JWT
  // POST to create a new message from the authenticated user

  apiRoutes.post('/profile/:id/chat', passport.authenticate('jwt', { session: false }), function(req, res) {

    console.log("apiRoutes post Chat", req.body.from)

    User.findOne({_id: req.body.from}, function(err, user) {
      
      if (err) {
        throw err
      } else {

        console.log("apiRoutes post Chat user", user.userName)

        var newChat = new Chat({
          from: req.body.from,
          to: req.body.to,
          message_body: req.body.message_body,
          userName: req.body.userName
        });
   
        // // Save the chat message if there are no errors
        newChat.save(function(err) {
          if (err) {
            res.send(err);
          } else {
            res.json({ 
            message: req.body.message_body 
            });
          }
        });
      }
    })
  });



  // GET messages for authenticated user
  apiRoutes.get('/profile/:id/chat', passport.authenticate('jwt', { session: false }), function(req, res) {
    Chat.find({}).sort([
      ["date", "ascending"]
    ]).limit(20).exec(function(err, doc) {
      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });

    // Chat.find({$or : [{'to': req.user._id}, {'from': req.user._id}]}, function(err, messages) {
    //   if (err)
    //       res.send(err);
    //   console.log("apiRoutes get Chat", messages)
    //   res.json({
    //     message: messages.message_body
    //   });
    // });
    
  });



// Set url for API group routes
  app.use('/api', apiRoutes);


};