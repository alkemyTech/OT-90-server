const authMe = (token) => {
  const response = {
    success: true,
    body: {
      id: token.id,
      Nombre: token.Nombre,
      Apellido: token.Apellido,
      Email: token.Email,
      Imagen: token.Imagen,
      Rol: token.Rol
    }
  }
  return response
}

module.exports = { authMe }
