const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const store = require('./store')

const authUser = async (email, password) => {
  try {
    const authUser = await store.authUser(email, password)
    const hashedSaved = authUser.dataValues.password
    const comparePassword = bcryptjs.compareSync(password, hashedSaved)
    return comparePassword
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

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

    return jwt.sign(userData, process.env.TOKEN)
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

module.exports = {
  authUser,
  newUser,
  getAll
}
