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
    res.status(200).json(users)
  } catch (Error) {
    res.status(500).json({ Error: 'Something has gone wrong' })
  }
})

router.post('/', validation(userSchema),
  async (req, res) => {
    const {
      firstName, lastName, password, email, role
    } = req.body
    return controller.newUser(firstName, lastName, password, email, role)
      .then((response) => res.status(201).json(response))
      .catch(({ message: error }) => {
        res.status(400).json(error)
      })
  })

router.post('/login',
  async (req, res) => {
    const authUser = await controller.authUser(req.body.email, req.body.password)
    if (!authUser) return res.status(400).json({ success: false, body: 'incorrect' })
    authUser.userData.token = jwt.sign(authUser.userData, process.env.TOKEN)
    const response = {
      user: authUser.userData,
      message: `welcome ${req.body.email}`
    }
    return authUser.comparePassword
      ? res.status(200).json({ success: true, body: response })
      : res.status(400).json({ success: false, body: 'incorrect' })
  })

router.delete('/:id', async (req, res) => {
  controller
    .deleteUser(req.params.id)
    .then((message) => res.status(201).json(message))
    .catch((error) => res.status(400).json(error))
})

module.exports = router
