const express = require('express')
const controller = require('./controller')
const { isAdmin, validation } = require('../../middleware/index')
const { categoryPostSchema } = require('./schema')

const router = express.Router()

router.post(
  '/',
  isAdmin,
  validation(categoryPostSchema),
  async (req, res) => {
    try {
      const activity = await controller.addActivity(req.body.name, req.body.content)
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
