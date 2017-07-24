const express = require('express')
const path = require("path")

// Export the routes for our app to use
//module.exports = function(app) {
  const router = express.Router();

  router.get("/", (req, res) => {
    res.send("This is server '/' route")
    //res.sendFile(path.join(__dirname,'../../public/index.html'))
  });

  // router.get("/ratings", (req, res) => {
  //   res.sendFile(path.join(__dirname, "../../public/ratings.html"))
  // });

  // router.get("*", (req, res) => {
  //   res.send("Catch all route")
  //   //res.sendFile(__dirname,'../../public/index')
  // });

  // Set url for html routes
//   app.use('/', router);
// }


module.exports = router;

