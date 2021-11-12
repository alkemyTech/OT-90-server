const { Entries } = require('../../models/index')

const getAll = async (limit, sort) => {
  const options = {
    where: {
      type: 'news'
    }
  }
  if (limit) options.limit = limit
  if (sort) options.order = sort
  try {
    const news = await Entries.findAll(options)
    return news
  } catch ({ message: error }) {
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
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

const deleteNew = async (newId) => {
  try {
    const deletedNew = await Entries.destroy({ where: { id: newId } })
    if (deletedNew === 0) throw new Error('Entrie not found')
    return deletedNew
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

const modifyNew = async (newToModify) => {
  try {
    const { id } = newToModify
    const { name } = newToModify
    const { content } = newToModify
    const { image } = newToModify
    const { categoryId } = newToModify

    const putNew = await Entries.findByPk(id)
    putNew.name = name
    putNew.content = content
    putNew.image = image
    putNew.categoryId = categoryId
    await putNew.save()

    return putNew
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  getAll,
  getById,
  addNew,
  deleteNew,
  modifyNew

}
