const express = require('express')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const router = express.Router()

const controller = require('./controller')

const { isAdmin, validation } = require('../../middleware/index')
const { userSchema } = require('../../validate/userSchema')

const response = { success: true, body: null }

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
      Nombre, Apellido, Email, Contraseña, Imagen, Rol
    } = req.body
    return controller.newUser(Nombre, Apellido, Email, Contraseña, Imagen, Rol)
      .then((response) => res.status(201).send(response))
      .catch(({ message: error }) => {
        res.status(400).send(error)
      })
  })

router.post('/auth/login',
  async (req, res) => {
    const authUser = await controller.authUser(req.body.email, req.body.password)
    const body = { email: req.body.email, password: req.body.password }
    const response = {
      success: true,
      token: jwt.sign(body, process.env.TOKEN),
      user: authUser.authUser,
      message: `welcome ${req.body.email}`
    }
    return authUser.comparePassword
      ? res.status(200).json({ success: true, body: response })
      : res.status(400).json({ success: false, body: 'incorrect' })
  })

router.delete('/:id', isAdmin, async (req, res) => {
  const { params: { id } } = req
  try {
    const deleted = await controller.deleteUser(id)
    if (!deleted) {
      response.success = false
      response.body = { error: `A user with that ${id} was not found` }
      return res.status(404).json(response)
    }
    response.body = {}
    return res.status(204).json(response)
  } catch (Error) {
    response.success = false
    response.body = { error: 'Something has gone wrong' }
    return res.status(500).json(response)
  }
})

module.exports = router
