const express = require('express')

const { body, validationResult } = require('express-validator')

const controller = require('./controller')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const contacts = await controller.getAll()
    res.status(200).send(contacts)
  } catch (Error) {
    res.status(500).send({ Error: 'Something has gone wrong' })
  }
})

router.post('/',
  body('name').notEmpty(),
  body('email').isEmail(),
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const {
      name, phone, email, message
    } = req.body
    return controller.addCont(name, phone, email, message)
      .then((response) => res.status(201).send(response))
      .catch(({ message: error }) => {
        res.status(400).send(error)
      })
  })

module.exports = router
