const store = require('./store')

const response = { success: true, body: null }

const getAll = async () => {
  try {
    const allNews = await store.getAll()
    return allNews
      .map((singleNews) => (
        {
          id: singleNews.id,
          name: singleNews.name,
          conent: singleNews.content,
          image: singleNews.image,
          categoryId: singleNews.categoryId,
          type: singleNews.type
        }
      ))
  } catch ({ message: error }) {
    throw new Error(error)
  }
}
const addNew = async (name, content, image, categoryId) => {
  try {
    response.success = true
    response.body = await store.addNew({
      name, content, image, categoryId, type: 'news'
    })
    return response
  } catch (error) {
    response.success = false
    response.body = { error: error.message }
    throw response
  }
}

const getNewsById = async (id) => {
  try {
    const { dataValues: news } = await store.getById(id) || { dataValues: {} }
    return news
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

const deleteNew = async (newId) => {
  try {
    const deletedNew = await store.deleteNew(newId)
    return deletedNew
  } catch ({ message: error }) {
    const response = {}
    response.success = false
    response.body = { error }
    throw response
  }
}
const modifyNew = async (id, reqBody) => {
  try {
    const {
      name, content, image, categoryId
    } = reqBody
    response.success = true
    response.body = await store.modifyNew({
      id, name, content, image, categoryId
    })
    return response
  } catch (error) {
    response.success = false
    response.body = { error: error.message }
    throw response
  }
}

module.exports = {
  getAll, getNewsById, addNew, deleteNew, modifyNew
}
