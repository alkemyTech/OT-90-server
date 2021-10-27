const express = require('express')

const router = express.Router();

const usersNetwork = require('../components/users/network')

router.use('/users', usersNetwork)

module.exports = router
