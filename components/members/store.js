const db = require('../../models/index')

const getAll = async () => {
  try {
    const members = await db.sequelize.models.Member.findAll()
    return members
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = { getAll }
