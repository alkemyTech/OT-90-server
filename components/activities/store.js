const { Activity } = require('../../models')

const addActivity = async (activity) => {
  try {
    const { name } = activity
    const { content } = activity
    const createdActivity = await Activity.create({
      name,
      content
    })
    return createdActivity
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  addActivity
}
