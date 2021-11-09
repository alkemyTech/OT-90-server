const jwt = require('jsonwebtoken')
const { Role } = require('../models')
require('dotenv').config()

module.exports = {
  verifyToken: (req, res, next) => {
    if (!req.headers.authorization) {
      return res.status(400).json({ success: false, body: 'missing token' })
    }
    try {
      const token = req.headers.authorization.replace('Bearer ', '')
      const decripted = jwt.verify(token, process.env.TOKEN)
      req.token = decripted
      return next()
    } catch (error) {
      return res.status(400).json({ success: false, body: error })
    }
  },
  isAdmin: async (req, res, next) => {
    try {
      const token = req.headers.authorization.replace('Bearer ', '')
      const decripted = jwt.verify(token, process.env.JWT_SECRET_KEY)
      const { Rol } = decripted
      const role = await Role.findByPk(Rol)
      if (role && role.name.toLowerCase().trim() === 'admin') {
        next()
      } else {
        throw new Error()
      }
    } catch (e) {
      res.status(403).json({ success: false, body: 'Your user role have not authorization to make this request' })
    }
  },
  validation: (schema) => async (req, res, next) => {
    try {
      await schema.validate(
        {
          body: req.body,
          query: req.query,
          params: req.params
        },
        { abortEarly: false }
      ) // abortEarly: false so it will show the entire list of errors
      return next()
    } catch (err) {
      return res.status(400).json({ type: err.name, message: err.message, errors: err.errors })
    }
  }
}
