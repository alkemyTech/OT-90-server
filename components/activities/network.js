const { body, validationResult } = require('express-validator')
const express = require('express')
const controller = require('./controller')
const { isAdmin } = require('../../middleware/index')

const router = express.Router()

router.post(
  '/',
  isAdmin,
  body('name').notEmpty(),
  body('content').notEmpty(),
  body('name').isLength({ max: 200 }),
  body('content').isLength({ max: 255 }),
  async (req, res) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }
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
