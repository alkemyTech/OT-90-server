const { sendMail } = require('../marketing')
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

module.exports = { getAll, addCont }
