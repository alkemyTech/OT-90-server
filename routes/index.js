const express = require('express')

const router = express.Router()
const membersNetwork = require('../components/members/network')
const usersNetwork = require('../components/users/network')
const categoriesNetwork = require('../components/categories/network')

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' })
})

router.use('/members', membersNetwork)
router.use('/users', usersNetwork)
router.use('/categories', categoriesNetwork)

module.exports = router
