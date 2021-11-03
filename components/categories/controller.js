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

const addCategory = async (name, description) => store.addCategory(name, description)

const deleteCategory = async (id) => {
  try {
    const deleted = await store.deleteById(id)
    return deleted
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = {
  getAll,
  deleteCategory,
  addCategory
}
