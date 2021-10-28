const db = require('../../models/index')

const getAll = async () => {
  try {
    const contacts = await db.sequelize.models.Contacts.findAll()
    return contacts
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = {
  getAll
}
