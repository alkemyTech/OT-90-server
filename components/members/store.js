const { Member } = require('../../models/index')

const getAll = async () => {
  try {
    const members = await Member.findAll()
    return members
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

const addMember = async (body) => {
  try {
    const newMember = await Member.create({
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

const deleteMember = async (id) => {
  try {
    const member = await Member.findByPk(id)
    if (!member) throw new Error('Can´t find user')
    await member.destroy()
    return { success: true, body: 'Deleted succesfully' }
  } catch ({ message: error }) {
    throw new Error(error)
  }
}
module.exports = { getAll, addMember, deleteMember, modifyMember }

