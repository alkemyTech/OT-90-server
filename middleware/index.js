const { Role } = require('../models')

module.exports = {
  isAdmin: async (req, res, next) => {
    const roleId = req.header('roleId')
    try {
      const role = await Role.findByPk(roleId)
      if (role.name === 'Admin') {
        next()
      } else {
        res.status(403).send('Your user role have not authorization to make this request')
      }
    } catch (e) {
      res.status(500).send('Somethins gone wrong')
    }
  }
}
