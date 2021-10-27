const express = require('express')

const router = express.Router()

const usersNetwork = require('../components/users/network')
const categoriesNetwork = require('../components/categories/network')
const news = require('../components/news/network')

router.use('/users', usersNetwork)
router.use('/categories', categoriesNetwork)
router.use('/news', news)

module.exports = router
