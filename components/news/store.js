const { Entries } = require('../../models/index')

const getAll = async () => {
  try {
    const news = await Entries.findAll()
    return news
  } catch ({ message: error }) {
    throw new Error(error)
  }
}
const addNew = async (oneNew) => {
  try {
    const { name } = oneNew
    const { content } = oneNew
    const { image } = oneNew
    const { categoryId } = oneNew
    const { type } = oneNew
    const createdNew = await Entries.create({
      name,
      content,
      image,
      categoryId,
      type
    })
    return createdNew
  } catch (error) {
    throw new Error(error)
  }
}

const getById = async (id) => {
  try {
    const news = await await Entries.findOne({ where: { id } })
    return news
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = {
  getAll,
  getById,
  addNew
}
