const db = require('../../models/index')

const getAll = async () => {
  try {
    const categories = await db.sequelize.models.Category.findAll()
    return categories
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = {
  getAll
}
