const db = require('../../models/index')

const getAll = async () => {
  try {
    const users = await db.sequelize.models.User.findAll()
    return users
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = {
  getAll
}
