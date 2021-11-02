const db = require('../../models/index')

const getAll = async () => {
  try {
    const news = await db.sequelize.models.Entries.findAll()
    return news
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

const getById = async (id) => {
  try {
    const news = await await db.sequelize.models.Entries.findOne({ where: { id } })
    return news
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = {
  getAll,
  getById
}
