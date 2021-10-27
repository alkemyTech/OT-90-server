const express = require('express')

const router = express.Router()
const membersNetwork = require('../components/members/network')
/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' })
})
router.use('/members', membersNetwork)

module.exports = router
