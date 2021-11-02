const express = require('express')

const router = express.Router()

const { body, validationResult } = require('express-validator')

const controller = require('./controller')

const { isAdmin } = require('../../middleware/index')

router.get('/', isAdmin, async (req, res) => {
  try {
    const users = await controller.getAll()
    res.status(200).send(users)
  } catch (Error) {
    res.status(500).send({ Error: 'Something has gone wrong' })
  }
})

router.post('/',
  body('Nombre').notEmpty(),
  body('Apellido').notEmpty(),
  body('Email').isEmail(),
  body('Contraseña').isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const {
      Nombre, Apellido, Email, Contraseña, Imagen, Rol
    } = req.body
    return controller.newUser(Nombre, Apellido, Email, Contraseña, Imagen, Rol)
      .then((response) => res.status(201).send(response))
      .catch(({ message: error }) => {
        res.status(400).send(error)
      })
  })

router.delete('/:id', isAdmin, async (req, res) => {
  const { params: { id } } = req
  try {
    const deleted = await controller.deleteUser(id)
    if (!deleted) {
      res.status(404).send({ Error: `A user with that ${id} was not found` })
      return
    }
    res.status(204).send()
  } catch (Error) {
    res.status(500).send({ Error: 'Something has gone wrong' })
  }
})

module.exports = router
