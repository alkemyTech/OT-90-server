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

const addCategory = async (name, description) => {
  try {
    const newCat = await store.addCategory(name, description)
    return {
      success: true,
      body: {
        id: newCat.id,
        name: newCat.name,
        description: newCat.description,
        updatedAt: newCat.updatedAt,
        createdAt: newCat.createdAt
      }
    }
  } catch (error) {
    throw new Error(error.message)
  }
}

const deleteCategory = async (id) => {
  try {
    const deleted = await store.deleteById(id)
    return deleted
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

const updateCategory = async (id, body) => {
  try {
    const updated = await store.updateCategory(id, body)
    return updated
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = {
  getAll,
  deleteCategory,
  addCategory,
  updateCategory
}
