const express = require('express')

const router = express.Router()

const contactsNetwork = require('../components/contacts/network')
const membersNetwork = require('../components/members/network')
const usersNetwork = require('../components/user/network')
const categoriesNetwork = require('../components/categories/network')
const news = require('../components/news/network')

router.use('/contacts', contactsNetwork)
router.use('/members', membersNetwork)
router.use('/users', usersNetwork)
router.use('/categories', categoriesNetwork)
router.use('/news', news)

module.exports = router
