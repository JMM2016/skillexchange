/**
 * Created by Miguel on 7/13/2017.
 */

const express = require('express')
const path = require("path")
const User = require('../models/user')

//module.exports = function(app) {
const router = express.Router();

  router.get('/test', (req, res) => {
    res.send(" /api/ctlr/test works ")
  })

  // Set url for api routes
  // could do app.use('/api', router); and then wouldn't have to add /api to each endpoint
  //app.use('/', router);

//}

module.exports = router