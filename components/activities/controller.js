const store = require('./store')

const addActivity = async (name, content) => {
  try {
    const newActivity = await store.addActivity({ name, content })
    return newActivity
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = { addActivity }
