const express = require('express')
// const controller = require('./controller')

const router = express.Router()

router.get('/me', async (req, res) => {
  res.json('ok')
})

module.exports = router
