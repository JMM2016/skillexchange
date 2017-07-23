// Include the Axios library for HTTP requests
var axios = require("axios");

// NYT API Key (Replace with your own API Key)
// var APIKey = "9b3adf57854f4a19b7b5782cdd6e427a";

// Helper Functions
var helpers = {

    // New users sign up
    signUp: function (email, password, firstName, lastName) {
        var newUser = {
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName
            };

        return axios.post("/api/signup", newUser)
            .then(function (data) {
                console.log("signup data", data)
                return data;
        });
    },
    
    login: function(email, password) {
        var newLogin = {
                email: email,
                password: password,
            
        };

        return axios.post("/api/login", newLogin)
            .then(function(data) {
                console.log("Helpers: login data", data)
                return data
        });
    },

    verifyProfile: function(id) {
     
        return axios.get(`/api/profile/${id}`)
            .then(function(data) {
                console.log("verifyProfile data", data)
                return data
        });
    },

    logout: function() {
        return axios.get("/api/logout")
            .then(function() {
                console.log("helpers logout")
        });
    },

    postChat: function(sender, recevier, msg) {

        var newChat = {
            from: sender,
            to: recevier,
            message_body: msg
        };
       
        return axios.post("/api/chat", newChat)
            .then(function(data) {
                console.log("post chat data", data);
                return data
        });
    }





};


// We export the helpers function
module.exports = helpers;
