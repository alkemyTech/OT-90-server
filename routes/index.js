const express = require('express')

const router = express.Router()

const networkUser = require('../components/user/network')

router.use('/users', networkUser)

module.exports = router
