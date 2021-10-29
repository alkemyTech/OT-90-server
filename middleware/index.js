const { Role } = require('../models')

module.exports = {
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
  }
}
