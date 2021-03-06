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

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    userName: {
        type: String,
        required: true
    },

    rating: { type: Number, default: 0},
    numOfRatings: { type: Number, default: 0},

    contracts: [{
       otherUsersEmail: String,
       title: String,
       body: String,
       accepted: { type: Boolean, default: false },
       dueDate: Date,
       active: {type: Boolean, default: true}
    }],

    have: {
        type: [String]
    },
    need: {
        type: [String]
    },
    street: {
        type: [String]
    },
    city: {
        type: [String]
    },
    state: {
        type: [String]
    },
    bio: {
        type: String
    },

    updated: {type: Date, default: Date.now}

    // token: {
    //   type: String
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
            bcrypt.hash(user.password, salt, function (err, hash) {
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
UserSchema.methods.comparePassword = function (pw, cb) {
    bcrypt.compare(pw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);  