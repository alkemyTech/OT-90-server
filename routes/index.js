const express = require('express')

const router = express.Router()

const userNetwork = require('../components/user/network')
const categoriesNetwork = require('../components/categories/network')
const news = require('../components/news/network')

router.use('/users', userNetwork)
router.use('/categories', categoriesNetwork)
router.use('/news', news)

module.exports = router
