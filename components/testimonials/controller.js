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

module.exports = {
  updateTestimonial
}
