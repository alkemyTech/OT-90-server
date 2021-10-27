const db = require('../../models/index')

const getAll = async () => {
  try {
    const news = await db.sequelize.models.Entries.findAll()
    return news
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = {
  getAll
}
