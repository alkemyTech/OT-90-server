const { Category } = require('../../models/index')

const getAll = async () => {
  try {
    const categories = await Category.findAll()
    return categories
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

const addCategory = async (name, description) => {
  try {
    const category = await Category.findOne({ where: { name } })
    if (!category) {
      const newCategory = await Category.create({ name, description })
      return newCategory
    }
    throw new Error(`${name} allready exist`)
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

const deleteById = async (id) => {
  try {
    const deleted = await Category.destroy({ where: { id } })
    return deleted
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = {
  getAll,
  addCategory,
  deleteById
}
