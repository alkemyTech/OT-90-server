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

const getById = async (id) => {
  try {
    const activity = await store.getById(id)
    if (activity) {
      response.success = true
      response.body = activity
    } else {
      response.success = false
      response.body = `Activity (ID: ${id}) Not Found`
    }
    return response
  } catch (error) {
    response.success = false
    response.body = { error: error.message }
    throw response
  }
}

const updateActivity = async (activity) => {
  try {
    await store.updateActivity(activity)
    response.success = true
    response.body = activity
    return response
  } catch (error) {
    response.success = false
    response.body = { error: error.message }
    throw response
  }
}

module.exports = {
  addActivity,
  getById,
  updateActivity
}
