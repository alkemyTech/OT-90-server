const db = require('../models');

// eslint-disable-next-line consistent-return
const newsAuthMiddleware = (req, res, next) => {
  const userAdmin = db.User.findOne({ where: { roleId: 0 } })
  if (!userAdmin) {
    return res.status(401).send({ Error: 'Auth failed' })
  }
  next()
}

module.exports = newsAuthMiddleware
