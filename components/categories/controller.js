const store = require('./store')

const response = { success: true, body: null }

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
    if (!deleted) {
      response.success = false
      response.body = { error: `Not founded a category with id ${id}` }
      return response
    }
    response.success = true
    response.body = {}
    return response
  } catch ({ message }) {
    response.success = false
    response.body = { error: message }
    throw response
  }
}

const updateCategory = async (id, body) => {
  try {
    const updated = await store.updateCategory(id, body)
    if (!updated[0]) {
      response.success = false
      response.body = { error: `Not founded a category with id ${id}` }
      return response
    }
    response.success = true
    response.body = { ...body, id }
    return response
  } catch ({ message }) {
    response.success = false
    response.body = { error: message }
    throw response
  }
}

module.exports = {
  getAll,
  deleteCategory,
  addCategory,
  updateCategory
}
