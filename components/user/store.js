const { User, Role } = require('../../models')

const authUser = async (email) => {
  try {
    const user = await User.findOne({ where: { email } })
    if (!user) return null
    const role = await Role.findByPk(user.roleId)
    user.role = role.name
    user.save()
    return user
  } catch (error) {
    throw new Error(error)
  }
}

const newUser = async (firstName, lastName, email, password, role) => {
  try {
    const userExist = await User.findOne({ where: { email } })
    let roleId = await Role.findOne({
      where: {
        name: role
      }
    })
    roleId = roleId.id
    if (userExist !== null) throw new Error('User already exists')

    const createdUser = await User.create({
      firstName,
      lastName,
      email,
      password,
      roleId
    })

    return createdUser
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

const putUser = async (id, firstName, lastName, image) => {
  try {
    /* const modifydUser = await User.update({
      firstName: firstName,
      lastName: lastName,
      image: image
    }, { where: { id }}, ) */

    const modifydUser = await User.findByPk(id) 
    modifydUser.firstName = firstName, 
    modifydUser.lastName = lastName, 
    modifydUser.image = image 
    await modifydUser.save()

    return modifydUser
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
  authUser,
  newUser,
  getAll,
  putUser,
  deleteById
}
