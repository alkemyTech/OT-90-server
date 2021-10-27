const express = require('express')

const router = express.Router()

const { body, validationResult } = require('express-validator')

const controller = require('./controller')

router.post('/',
  body('Email').isEmail(),
  body('Contraseña').isLength({ min: 5 }),
  body('Nombre').notEmpty(),
  body('Apellido').notEmpty(),
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

module.exports = router
