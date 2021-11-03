const store = require('./store')

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
    const postNew = await store.addNew({
      name, content, image, categoryId, type: 'news'
    })
    return postNew
  } catch (error) {
    throw new Error(error)
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

module.exports = {
  getAll,
  getNewsById,
  addNew,
  deleteNew
}
