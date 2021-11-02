const store = require('./store')

const getAll = async () => {
  try {
    const allNews = await store.getAll()
    return allNews
      .map((singleNews) => (
        {
          id: singleNews.id,
          name: singleNews.name,
          image: singleNews.image,
          createdAt: singleNews.createdAt // not in the table migration because not asked.
        }
      ))
  } catch ({ message: error }) {
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

module.exports = { getAll, getNewsById }
