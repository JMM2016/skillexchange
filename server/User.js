// User model
// ==============

// Require mongoose
var mongoose = require("mongoose");

// Create a schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the headlineSchema with our schema class
var userSchema = new Schema({
    // firstName, a string, must be entered
    firstName: {
        type: String
    },
    // // lastName, a string, must be entered
    // lastName: {
    //     type: String,
    //     required: true
    // },
    // email: {
    //     type: String,
    //     required: true
    // },
    // age: {
    //     type: Number,
    //     min: 18,
    //     max: 65 },
    // password: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
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
    updated: { type: Date, default: Date.now }
});

// Create the User model using the userSchema
var User = mongoose.model("User", userSchema);

// Export the User model
module.exports = User;
