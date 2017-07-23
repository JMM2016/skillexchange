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
}

module.exports=helpers;

