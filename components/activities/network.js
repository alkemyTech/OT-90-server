const express = require('express')
const controller = require('./controller')
const { isAdmin, validation } = require('../../middleware/index')
const { activityPostSchema } = require('../../validate/activitySchema')

const router = express.Router()

router.post(
  '/',
  isAdmin,
  validation(activityPostSchema),
  async (req, res) => {
    try {
      const response = await controller.addActivity(req.body.name, req.body.content)
      return res.status(201).json(response)
    } catch (failedResponse) {
      return res.status(500).json(failedResponse)
    }
  }
)

module.exports = router
