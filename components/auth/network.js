const express = require('express')
const { verifyToken } = require('../../middleware/index')
const { authMe } = require('./controller')

const router = express.Router()

router.get('/me', verifyToken, async (req, res) => {
  const response = authMe(req.token)
  res.json(response)
})

module.exports = router
