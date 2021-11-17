const authMe = (token) => {
  const response = {
    success: true,
    body: {
      id: token.id,
      Nombre: token.firstName,
      Apellido: token.lastName,
      Email: token.email,
      Imagen: token.image,
      Rol: token.role
    }
  }
  return response
}

module.exports = { authMe }
