const express = require('express')

const router = express.Router()

const contactsNetwork = require('../components/contacts/network')
const membersNetwork = require('../components/members/network')
const usersNetwork = require('../components/user/network')
const categoriesNetwork = require('../components/categories/network')
const news = require('../components/news/network')
const organizations = require('../components/organization/network')

router.use('/contacts', contactsNetwork)
router.use('/users', usersNetwork)
router.use('/categories', categoriesNetwork)
router.use('/news', news)
router.use('/organizations', organizations)
router.use('/members', membersNetwork)

module.exports = router
