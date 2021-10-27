const express = require('express')

const router = express.Router()

const news = require('../components/news/network')

router.get('/', (req, res) => {
  res.render('index', { title: 'Express' })
})

router.use('/news', news)

module.exports = router
