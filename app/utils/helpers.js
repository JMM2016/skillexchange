// Include the Axios library for HTTP requests
var axios = require("axios");

// NYT API Key (Replace with your own API Key)
var APIKey = "9b3adf57854f4a19b7b5782cdd6e427a";

// Helper Functions
var helpers = {

    // This will run our query.
    runQuery: function (term) {

        return axios.get("/api/need/" + term)
            .then(function (results) {
                console.log("Axios Results", results);
                return results.data.response;
            });
    },
    // This will return any saved articles from our database
    getUsers: function () {
        return axios.get("/api/user/")
            .then(function (results) {
                console.log("axios results", results);
                return results;
            });
    },

    // This will return any saved articles from our database
    getSaved: function () {
        return axios.get("/api/saved")
            .then(function (results) {
                console.log("axios results", results);
                return results;
            });
    },

    // This will save new articles to our database
    postSaved: function (title, date, url) {
        var newArticle = {title: title, date: date, url: url};
        return axios.post("/api/saved", newArticle)
            .then(function (response) {
                console.log("axios results", response.data._id);
                return response.data._id;
            });
    },
    // This will remove saved articles from our database
    deleteSaved: function (title, data, url) {
        return axios.delete("/api/saved", {
            params: {
                "title": title,
                "data": data,
                "url": url
            }
        })
            .then(function (results) {
                console.log("axios results", results);
                return results;
            });
    }
};


// We export the helpers function
module.exports = helpers;
