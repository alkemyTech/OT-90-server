const store = require('./store')

const getAll = async () => {
  try {
    const allMembers = await store.getAll()
    return allMembers.map((member) => ({
      id: member.id,
      name: member.name,
      image: member.image
    }))
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

const addMember = async (body) => {
  try {
    if (body.name === '') {
      throw new Error('name cannot be empty')
    }
    const newMember = await store.addMember(body)
    return newMember
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = { getAll, addMember }
