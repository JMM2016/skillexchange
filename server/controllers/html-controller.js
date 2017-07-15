const express = require('express')
const path = require("path")

// Export the routes for our app to use
module.exports = function(app) {
  const router = express.Router();

  router.get("/", (req, res) => {
    res.send("Hello World..")
  });

  router.get("/ratings", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/ratings.html"))
  });

  // Set url for html routes
  app.use('/', router);
}


