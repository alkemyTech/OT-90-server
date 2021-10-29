const db = require('../../models/index')

const getAll = async () => {
  try {
    const members = await db.sequelize.models.Member.findAll()
    return members
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

const addMember = async (body) => {
  try {
    const newMember = await db.sequelize.models.Member.create({
      name: body.name,
      image: body.image
    })
    return newMember
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = { getAll, addMember }
