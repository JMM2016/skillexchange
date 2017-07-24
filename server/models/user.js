/**
 * Created by Miguel on 7/13/2017.
 */
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

// Schema defines how the user data will be stored in MongoDB
var UserSchema = new mongoose.Schema({

  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  rating: Number,
  numOfRatings: Number,
  // maybe consider this active Contracts
  // make unique if only want 1 contract per person
  contracts: [{
   // otherUsersEmail: {
   //   type: String,
   //   unique: true
   // }
   otherUsersEmail: String,
   title: String,
   body: String,
   accepted: { type: Boolean, default: false },
   dueDate: Date,
   active: {type: Boolean, default: true}
   // unique: true
  }]

  // },
  // role: {
  //   type: String,
  //   enum: ['Client', 'Manager', 'Admin'],
  //   default: 'Client'
  // }
});

// Saves the user's password hashed (plain text password storage is not good)
UserSchema.pre('save', function (next) {
  var user = this;
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

// Create method to compare password input to password saved in database
UserSchema.methods.comparePassword = function(pw, cb) {
  bcrypt.compare(pw, this.password, function(err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', UserSchema);