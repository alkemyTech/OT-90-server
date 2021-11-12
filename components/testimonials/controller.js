const store = require('./store')

const response = { success: true, body: null }

const updateTestimonial = async (id, body) => {
  try {
    const updated = await store.updateTestimonial(id, body)
    if (!updated[0]) {
      response.success = false
      response.body = { error: `Not founded a testimonial with id ${id}` }
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

const addTestimonial = async (name, image, content) => {
  try {
    const newTest = await store.addTestimonial(name, image, content)
    return {
      success: true,
      body: {
        id: newTest.id,
        name: newTest.name,
        image: newTest.image,
        content: newTest.content,
        updatedAt: newTest.updatedAt,
        createdAt: newTest.createdAt
      }
    }
  } catch (error) {
    throw new Error(error.message)
  }
}

const deleteTestimonial = async (id) => {
  try {
    const deleted = await store.deleteById(id)
    response.success = true
    response.body = deleted
    return deleted
  } catch ({ message }) {
    response.success = false
    response.body = { error: message }
    throw response
  }
}

module.exports = {
  updateTestimonial,
  addTestimonial,
  deleteTestimonial
}
