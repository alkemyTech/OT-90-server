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

const getAll = async () => {
  try {
    const users = await User.findAll()
    return users
  } catch ({ message: error }) {
    throw new Error(error)
  }
}


const deleteById = async (id) => {
  try {
    const deleted = await User.destroy({ where: { id } })
    return deleted
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = {
  newUser,
  getAll,
  deleteById
}
