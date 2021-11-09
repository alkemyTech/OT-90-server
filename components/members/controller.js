const store = require('./store')

const response = { success: true, body: null }

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

const modifyMember = async (id, reqBody) => {
  try {
    const {
      name, image
    } = reqBody
    response.success = true
    response.body = await store.modifyMember({
      id, name, image
    })
    return response
  } catch (error) {
    response.success = false
    response.body = { error: error.message }
    throw response
  }
}

const deleteMember = async (id) => {
  try {
    return await store.deleteMember(id)
  } catch ({ message: error }) {
    const response = {}
    response.success = false
    response.body = error
    throw (response)
  }
}

module.exports = { 
  getAll, addMember, deleteMember, modifyMember
}
