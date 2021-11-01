const addActivity = async (name, content) => {
  try {
    const newActivity = { name, content }
    return newActivity
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = { addActivity }
