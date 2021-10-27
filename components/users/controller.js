const store = require('./store')

const getAll = async () => {
  try {
    const allUsers = await store.getAll()
    return allUsers
      .map((user) => (
        {
          id: user.id,
          firstName: user.firstName,        
          lastName: user.lastName,     
          email: user.email,     
          image: user.image,
          roleId: user.roleId   
        }
      ))
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = { getAll }