const { sendMail } = require('../marketing')
const store = require('./store')

const response = { success: true, body: null }

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

const getById = async (id) => {
  try {
    const data = await store.getById(id)
    if (!data) {
      response.success = false
      response.body = { Error: 'Not found' }
      return response
    }
    const { dataValues: contact } = data
    response.success = true
    response.body = contact
    return response
  } catch ({ message }) {
    response.success = false
    response.body = { error: message }
    throw response
  }
}

const updateContact = async (id, body) => {
  try {
    const updated = await store.updateContact(id, body)
    if (!updated[0]) {
      response.success = false
      response.body = { error: `Not founded a category with id ${id}` }
      return response
    }
    response.success = true
    response.body = { ...body, id }
    return response
  } catch ({ message }) {
    response.success = false
    response.body = { error: message }
    throw response
  }
}

const addCont = async (name, phone, email, message) => {
  try {
    const newCont = await store.addCont(name, phone, email, message)
    const mail = {
      email,
      subject: 'Contacto',
      msg: `
      <h2>Recibimos tu mensaje</h2>
      <p>Gracias por ponerte en contacto con <strong>Somos Más</strong>, pronto nuestro equipo se pondra en contacto con vos.</p>
      <hr>
      <h3>Mensaje recibido:</h3>
      <p>${message}</p>
      <h3>de:</h3>
      <p>${name}</p>
      <p>${email}</p>
      <footer>SomosMas.ong</footer>
      `
    }
    await sendMail(mail)
    return newCont
  } catch (error) {
    throw new Error(error.message)
  }
}

const deleteContact = async (Id) => {
  try {
    const deletedContact = await store.deleteById(Id)
    return deletedContact
  } catch ({ message: error }) {
    const response = {}
    response.success = false
    response.body = { error }
    throw response
  }
}

module.exports = {
  getAll, addCont, deleteContact, getById, updateContact
}
