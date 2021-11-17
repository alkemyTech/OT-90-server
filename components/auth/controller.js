const authMe = (token) => {
  const response = {
    success: true,
    body: {
      id: token.id,
      firstName: token.firstName,
      lastName: token.lastName,
      email: token.email,
      image: token.image,
      role: token.role
    }
  }
  return response
}

module.exports = { authMe }
