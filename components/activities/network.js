const express = require('express')
const controller = require('./controller')
const { isAdmin, validation } = require('../../middleware/index')
const { categoryPostSchema } = require('../../validate/activitySchema')

const router = express.Router()
const response = { success: true, body: null }

router.post(
  '/',
  isAdmin,
  validation(categoryPostSchema),
  async (req, res) => {
    try {
      const activity = await controller.addActivity(req.body.name, req.body.content)
      response.body = activity
      return res.status(201).json(response)
    } catch (e) {
      response.success = false
      response.body = e
      return res.status(500).json(response)
    }
  }
)

module.exports = router
