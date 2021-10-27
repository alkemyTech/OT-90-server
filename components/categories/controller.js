const store = require('./store')

const getAll = async () => {
  try {
    const allCategories = await store.getAll()
    return allCategories
      .map((category) => (
        {
          id: category.id,
          name: category.name
        }
      ))
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = { getAll }
