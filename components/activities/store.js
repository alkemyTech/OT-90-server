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

const updateActivity = async (activity) => {
  try {
    const { name } = activity
    const { content } = activity
    const { id } = activity
    const updatedAt = new Date()
    await Activity.update(
      {
        name,
        content,
        updatedAt
      },
      { where: { id } }
    )
  } catch (error) {
    throw new Error(error)
  }
}

const getById = async (id) => {
  try {
    const activity = await Activity.findByPk(id)
    return activity
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  addActivity,
  updateActivity,
  getById
}
