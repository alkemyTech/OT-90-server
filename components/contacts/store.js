const db = require('../../models/index')

const getAll = async () => {
  try {
    const contacts = await db.sequelize.models.Contacts.findAll()
    return contacts
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

const addCont = async (name, phone, email, message) => {
  try {
    const createdContacts = await db.sequelize.models.Contacts.create({
      name,
      phone,
      email,
      message
    })

    return { createdContacts, Error }
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = { getAll, addCont }
