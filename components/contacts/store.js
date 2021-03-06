const db = require('../../models/index')

const getAll = async () => {
  try {
    const contacts = await db.sequelize.models.Contacts.findAll()
    return contacts
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

const getById = async (id) => {
  try {
    const contact = await db.sequelize.models.Contacts.findOne({ where: { id } })
    return contact
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

const updateContact = async (id, body) => {
  try {
    const updated = await db.sequelize.models.Contacts.update(body, { where: { id } })
    return updated
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

const deleteById = async (id) => {
  try {
    const deleted = await db.sequelize.models.Contacts.destroy({ where: { id } })
    return deleted
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = {
  getAll, addCont, deleteById, getById, updateContact
}
