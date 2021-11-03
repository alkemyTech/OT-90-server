const store = require('./store')

const response = { success: true, body: null }

const addActivity = async (name, content) => {
  try {
    response.success = true
    response.body = await store.addActivity({ name, content })
    return response
  } catch (error) {
    response.success = false
    response.body = { error: error.message }
    throw response
  }
}

module.exports = {
  addActivity
}
