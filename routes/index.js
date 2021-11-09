const express = require('express')

const router = express.Router()

const contactsNetwork = require('../components/contacts/network')
const membersNetwork = require('../components/members/network')
const usersNetwork = require('../components/user/network')
const categoriesNetwork = require('../components/categories/network')
const news = require('../components/news/network')
const organizations = require('../components/organization/network')

const pong = require('../components/pong/network')
const activitiesNetwork = require('../components/activities/network')
const marketingNetwork = require('../components/marketing/network')
const authNetwokr = require('../components/auth/network')
const testimonialsNetwokr = require('../components/testimonials/network')

router.use('/ping', pong)
router.use('/contacts', contactsNetwork)
router.use('/users', usersNetwork)
router.use('/categories', categoriesNetwork)
router.use('/news', news)
router.use('/organizations', organizations)
router.use('/members', membersNetwork)
router.use('/activities', activitiesNetwork)
router.use('/marketing', marketingNetwork)
router.use('/auth', authNetwokr)
router.use('/testimonials', testimonialsNetwokr)

module.exports = router
