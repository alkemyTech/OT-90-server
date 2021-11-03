const express = require('express')
const { verifyToken } = require('../../middleware/index')
const { authMe } = require('./controller')

const router = express.Router()

router.get('/me', verifyToken, async (req, res) => {
  try {
    const response = authMe(req.token)
    res.status(200).json(response)
  } catch (e) {
    res.status(400).json({ success: false, body: e })
  }
})

module.exports = router
