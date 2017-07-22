// Include the Axios library for HTTP requests
var axios = require("axios");

// NYT API Key (Replace with your own API Key)
var APIKey = "9b3adf57854f4a19b7b5782cdd6e427a";

// Helper Functions
var helpers = {

    // This will return all users from our database
    allUserSearch: function () {
        return axios.get("/api/user/")
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
        return axios.get("/api/have/" + newQuery)
            .then(function (results) {
                console.log("need results", results);
                return results;
            });
    },
};


// We export the helpers function
module.exports = helpers;
