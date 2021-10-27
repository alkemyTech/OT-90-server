const store = require('./store')

const newUser = async (firstName, lastName, email, password, image, roleId) => {
  try {
    const user = await store.newUser(firstName, lastName, email, password, image, roleId)
    const response = {
      Nombre: user.firstName,
      Apellido: user.lastName,
      Email: user.email,
      Imagen: user.image,
      Rol: user.roleId
    }
    return response
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = {
  newUser
}
