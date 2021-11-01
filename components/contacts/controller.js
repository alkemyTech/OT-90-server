const store = require('./store')

const getAll = async () => {
  try {
    const allContacts = await store.getAll()
    return allContacts.map((contact) => ({
      id: contact.id,
      name: contact.name,
      phone: contact.phone,
      email: contact.email,
      message: contact.message
    }))
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

const addCont = async (name, phone, email, message) => {
  try {
    const newCont = await store.addCont(name, phone, email, message)

    const res = {
      id: newCont.id,
      name: newCont.name,
      phone: newCont.phone,
      email: newCont.email,
      message: newCont.message
    }
    return res
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = { getAll, addCont }
