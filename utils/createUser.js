const jwt = require('jsonwebtoken')
const { User } = require('../models')

const createTestUser = async (data) => {
  try {
    const { email } = data
    const userData = { ...data }
    const isUser = await User.findOne({ where: { email } })
    if (isUser !== null) userData.email += 'Alkemy'
    const token = jwt.sign(userData, process.env.JWT_SECRET_KEY)
    const createdUser = await User.create(userData)
    createdUser.token = token
    return createdUser
  } catch (e) {
    return e
  }
}

module.exports = { createTestUser }
