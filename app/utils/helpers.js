// Include the Axios library for HTTP requests
import axios from 'axios';

// Helper Functions
const helpers = {

    // This will return all users from our database
    findUser: function (userID) {
        return axios.get("/api/user/" + userID)
            .then(function (results) {
                console.log("user results", results);
                return results;
            });
    },

    // This will return all users from our database
    haveSearch: function (newQuery) {
        return axios.get("/api/need/" + newQuery)
            .then(function (results) {
                console.log("have results", results);
                return results;
            });
    },

    // This will return all users from our database
    needSearch: function (newQuery) {
        console.log("helper need clicked")
        return axios.get("/api/have/" + newQuery)
            .then(function (results) {
                console.log("need results", results);
                return results;
            });
    },

    // New users sign up
    signUp: function (email, password, firstName, lastName, userName) {
        var newUser = {
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
                userName: userName
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
       
        // return axios.post("/api/profile/:id/chat", newChat)
        return axios.post(`/api/profile/${sender}/chat`, newChat)
            .then(function(data) {
                console.log("post chat data", data);
                return data
        });
    }
};
// We export the helpers function
module.exports = helpers;
