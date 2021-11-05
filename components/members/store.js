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

const modifyMember = async (memberToModify) => {
  try {
    const { id } = memberToModify
    const { name } = memberToModify
    const { image } = memberToModify
    const putMember = await db.sequelize.models.Member.findByPk(id)
    putMember.name = name
    putMember.image = image
    await putMember.save()
    return putMember
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = { getAll, addMember, modifyMember }
