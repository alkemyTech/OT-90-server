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
