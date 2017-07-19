// Include the Axios library for HTTP requests
var axios = require("axios");

// NYT API Key (Replace with your own API Key)
// var APIKey = "9b3adf57854f4a19b7b5782cdd6e427a";

// Helper Functions
var helpers = {

    // New users sign up
    signUp: function (email, password) {
        var newUser = {
                email: email,
                password: password
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
                password: password
        };

        return axios.post("api/login", newLogin)
            .then(function(data) {
                console.log("login data", data)
                return data
            });
    },

    
   
};


// We export the helpers function
module.exports = helpers;
