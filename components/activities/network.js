const express = require('express')
const controller = require('./controller')
const { isAdmin, validation } = require('../../middleware/index')
const { activityPostSchema, activityPutSchema } = require('../../validate/activitySchema')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const news = await controller.getAll()
    res.status(200).json(news)
  } catch (Error) {
    res.status(500).json({ Error: 'Something has gone wrong' })
  }
})

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
      const activityResponse = await controller.getById(id)

      if (!activityResponse.success) {
        return res.status(404).json(activityResponse)
      }

      const activity = activityResponse.body
      if (req.body.name) {
        activity.name = req.body.name
      }

      if (req.body.content) {
        activity.content = req.body.content
      }

      const response = await controller.updateActivity(activity)
      return res.status(200).json(response)
    } catch (failedResponse) {
      return res.status(500).json(failedResponse)
    }
  }
)

router.get('/:id', async (req, res) => {
  const { params: { id } } = req
  try {
    const activities = await controller.getActivitiesById(id)
    res.status(200).json(activities)
  } catch (Error) {
    res.status(500).json({ Error: 'Something has gone wrong' })
  }
})

router.delete('/:id', async (req, res) => {
  controller
    .deleteActivity(req.params.id)
    .then((message) => res.status(201).json(message))
    .catch((error) => res.status(400).json(error))
})

module.exports = router
