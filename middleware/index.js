const jwt = require('jsonwebtoken')
const { Role } = require('../models')

module.exports = {
  verifyToken: (req, res, next) => {
    if (!req.headers.authorization) {
      res.status(400).send('missing token')
    }
    try {
      const token = req.headers.authorization.replace('Bearer ', '')
      jwt.verify(token, process.env.TOKEN)
      next()
    } catch (error) {
      res.status(400).send('invalid token')
    }
  },
  isAdmin: async (req, res, next) => {
    try {
      const { roleid } = req.headers
      const role = await Role.findByPk(roleid)
      if (role.name.toLowerCase().trim() === 'admin') {
        next()
      } else {
        res.status(403).send('Your user role have not authorization to make this request')
      }
    } catch (e) {
      res.status(500).send('Somethins gone wrong')
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
