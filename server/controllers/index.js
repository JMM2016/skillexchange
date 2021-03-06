/**
 * Created by Miguel on 7/21/2017.
 */

const express = require('express')
const router = express.Router()

//Routes
const ratings = require('./ratings-controller')
const contracts = require('./contracts')

router.use('/', ratings)

router.use('/', contracts)

module.exports = router