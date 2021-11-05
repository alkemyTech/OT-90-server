const express = require('express')

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
      .then((response) => res.cookie('Authorization', `${response}`).status(201).send(response))
      .catch(({ message: error }) => {
        res.status(400).send(error)
      })
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
