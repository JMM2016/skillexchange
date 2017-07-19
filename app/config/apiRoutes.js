// Import dependencies
var passport = require('passport');  
var express = require('express');  
var config = require('./passportSecret');  
var jwt = require('jsonwebtoken');


// Load models
var User = require('../models/user');  
// var Chat = require('./models/chat'); 
// Right below this, we will use module.exports to export our routes for our server.js file to use. At the same time, we are going to cut our existing route code and passport configuration from our server.js file and paste it into our routes.js file.

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

    console.log("req.body", req.body.id)
    
    if(!req.body.email || !req.body.password) {
      res.json({ success: false, message: 'Please enter email and password.' });
    } else {

      var newUser = new User({
     
        email: req.body.email,
        password: req.body.password
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
          email: newUser.email,
          password: newUser.password
        });
      });
    }
  });

  // Authenticate the user and get a JSON Web Token to include in the header of future requests.
  apiRoutes.post('/login', function(req, res) {
    console.log("yyyyyyyyy")
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
              message: "Welcome back " + user.email,
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


  

  // apiRoutes.get("/logout", function(req, res) {
  //   req.logout();
  //   res.redirect("/");
  // })


  // Protect chat routes with JWT
  // POST to create a new message from the authenticated user
  // apiRoutes.post('/chat', passport.authenticate('jwt', { session: false }), function(req, res) {
  //   console.log("xxxx", req.body)
  //   var chat = new Chat();
  //       chat.from = req.user._id;
  //       chat.to = req.body.to;
  //       chat.message_body = req.body.message_body;

  //       // Save the chat message if there are no errors
  //       chat.save(function(err) {
  //           if (err)
  //               res.send(err);

  //           console.log("message", req.body.message_body);
  //           res.json({ 

  //             message: req.body.message_body });
  //       });
  // });



  // GET messages for authenticated user
  // apiRoutes.get('/chat', passport.authenticate('jwt', { session: false }), function(req, res) {
  //   Chat.find({$or : [{'to': req.user._id}, {'from': req.user._id}]}, function(err, messages) {
  //     if (err)
  //       res.send(err);

  //     res.json(messages);
  //   });
  // });

  // // DELETE a message
  // apiRoutes.delete('/chat/:message_id', passport.authenticate('jwt', { session: false }), function(req, res) {
  //   Chat.findOneAndRemove({$and : [{'_id': req.params.message_id}, {'from': req.user._id}]}, function(err) {
  //     if (err)
  //       res.send(err);

  //     res.json({ message: 'Message removed!' });
  //   });
  // });
  

  // PUT to update a message the authenticated user sent
  // apiRoutes.put('/chat/:message_id', passport.authenticate('jwt', { session: false }), function(req, res) {
  //   Chat.findOne({$and : [{'_id': req.params.message_id}, {'from': req.user._id}]}, function(err, message) {
  //     if (err)
  //       res.send(err);

  //     message.message_body = req.body.message_body;

  //     // Save the updates to the message
  //     message.save(function(err) {
  //       if (err)
  //         res.send(err);

  //       res.json({ message: 'Message edited!' });
  //     });
  //   });
  // });


// Set url for API group routes
  app.use('/api', apiRoutes);


};