// Import dependencies
var passport = require('passport');  
var express = require('express');  
var config = require('../config/main');  
var jwt = require('jsonwebtoken');

// Load models
var User = require('./models/user');  
var Chat = require('./models/chat'); 

var token;
var isLoggedin;

module.exports = function(app, passport) {


	app.post("/signup", passport.authenticate("local-signup"), function(req, res, next) {

		console.log()



	})







}
