const getAll = async () => {
  try {
    const categories = [{ name: 'test1' }, { name: 'test2' }]
    return categories
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = { getAll }
