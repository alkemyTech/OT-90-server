const express = require('express')

const router = express.Router()
const jwt = require('jsonwebtoken')
require('dotenv').config()

const controller = require('./controller')
const { isAdmin, validation } = require('../../middleware/index')
const userSchema = require('../../validate/userSchema')

router.get('/', isAdmin, async (req, res) => {
  try {
    const users = await controller.getAll()
    res.status(200).send(users)
  } catch (Error) {
    res.status(500).send({ Error: 'Something has gone wrong' })
  }
})

router.post('/', validation(userSchema),
  async (req, res) => {
    const {
      firstName, lastName, password, email, role
    } = req.body
    return controller.newUser(firstName, lastName, password, email, role)
      .then((response) => res.status(201).send(response))
      .catch(({ message: error }) => {
        res.status(400).json(error)
      })
  })

router.post('/auth/login',
  async (req, res) => {
    const authUser = await controller.authUser(req.body.email, req.body.password)
    const body = { email: req.body.email, password: req.body.password }
    const response = {
      token: jwt.sign(body, process.env.TOKEN),
      user: authUser.authUser,
      message: `welcome ${req.body.email}`
    }
    return authUser.comparePassword
      ? res.status(200).json({ success: true, body: response })
      : res.status(400).json({ success: false, body: 'incorrect' })
  })

module.exports = router
