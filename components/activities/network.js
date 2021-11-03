const express = require('express')
const controller = require('./controller')
const { isAdmin, validation } = require('../../middleware/index')
const { activityPostSchema, activityPutSchema } = require('../../validate/activitySchema')

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

router.put(
  '/:id',
  isAdmin,
  validation(activityPutSchema),
  async (req, res) => {
    try {
      const { id } = req.params
      return res.status(200).json(id)
    } catch (failedResponse) {
      return res.status(500).json(failedResponse)
    }
  }
)

module.exports = router
