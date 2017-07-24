/**
 * Created by Miguel on 7/21/2017.
 */

const express = require('express')
const router = express.Router()

//Routes
const apiCtlr = require('./api-controller')
const ratings = require('./ratings-controller')
//const html = require('./html-controller')
const contracts = require('./contracts')

router.use('/ctlr', apiCtlr)
router.use('/ratings', ratings)
//router.use('/', html)

router.use('/contracts', contracts)

module.exports = router