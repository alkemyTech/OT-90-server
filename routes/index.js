const express = require('express')

const router = express.Router()

const news = require('../components/news/network')
/* const newsAuthMiddleware = require('../middlewares/newsAuthMiddleware') */

router.get('/', (req, res) => {
  res.render('index', { title: 'Express' })
})

router.use('/news', /* newsAuthMiddleware, */ news)

module.exports = router
