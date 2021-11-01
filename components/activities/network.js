const express = require('express')

const router = express.Router()

router.post(
  '/',
  async (req, res) => {
    try {
      const activity = { name: req.body.name, content: req.body.content }
      return res.status(201).send({
        message: 'Activity succesfully created',
        activity
      })
    } catch (e) {
      return res.status(500).send({ error: e })
    }
  }
)

module.exports = router
