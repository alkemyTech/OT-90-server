const bcryptjs = require('bcryptjs')
const store = require('./store')

const newUser = async (firstName, lastName, email, password, image, roleId) => {
  const salt = bcryptjs.genSaltSync()
  const hashedPass = bcryptjs.hashSync(password, salt)
  try {
    const createdUser = await store.newUser(firstName, lastName, email, hashedPass, image, roleId)

    const response = {
      id: createdUser.id,
      Nombre: createdUser.firstName,
      Apellido: createdUser.lastName,
      Email: createdUser.email,
      Imagen: createdUser.image,
      Rol: createdUser.roleId
    }
    return response
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = {
  newUser
}
