const express = require('express')

const router = express.Router()

const usersNetwork = require('../components/users/network')
const categoriesNetwork = require('../components/categories/network')

router.use('/users', usersNetwork)
router.use('/categories', categoriesNetwork)

module.exports = router
