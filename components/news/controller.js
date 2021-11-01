const store = require('./store')

const getAll = async () => {
  try {
    const allNews = await store.getAll()
    return allNews
      .map((singleNews) => (
        {
          id: singleNews.id,
          name: singleNews.name,
          image: singleNews.image
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

module.exports = { getAll, addNew }
