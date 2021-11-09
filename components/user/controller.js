const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const store = require('./store')

const { sendMail } = require('../marketing/index')

const newUser = async (firstName, lastName, email, password, image, roleId) => {
  const salt = bcryptjs.genSaltSync()
  const hashedPass = bcryptjs.hashSync(password, salt)
  try {
    const createdUser = await store.newUser(firstName, lastName, email, hashedPass, image, roleId)

    const userData = {
      id: createdUser.id,
      Nombre: createdUser.firstName,
      Apellido: createdUser.lastName,
      Email: createdUser.email,
      Imagen: createdUser.image,
      Rol: createdUser.roleId
    }
    const mail = {
      email: createdUser.email,
      subject: 'Bienvenid@ a Somos Mas ONG',
      msg: `
      <h2>Gracias por registrarte en <strong>Somos Más</strong></h2>
      <hr>
      <h3>Este es un mensaje de agradecimiento</h3>
      <p>
        <ul>
          <li>Sumate</>
          <li>Colaborá</>
          <li>Participá</>
        </ul>
      </p>
      <footer>SomosMas.ong</footer>
      `
    }

    await sendMail(mail)
    const token = jwt.sign(userData, process.env.JWT_SECRET_KEY)
    const response = {
      success: true,
      body: { ...userData, token }
    }
    return response
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

const getAll = async () => {
  try {
    const allUsers = await store.getAll()
    return allUsers
      .map((user) => (
        {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          image: user.image,
          roleId: user.roleId
        }
      ))
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

const deleteUser = async (id) => {
  try {
    const deleted = await store.deleteById(id)
    return deleted
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = {
  newUser,
  getAll,
  deleteUser
}
