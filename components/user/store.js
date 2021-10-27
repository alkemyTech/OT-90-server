const { User } = require('../../models')

const newUser = async (firstName, lastName, email, password, image, roleId) => {
  try {
    const userExist = await User.findOne({ where: { email } })

    if (userExist !== null) throw new Error('User already exists')

    const createdUser = await User.create({
      firstName,
      lastName,
      email,
      password,
      image,
      roleId
    })

    return createdUser
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = {
  newUser
}
