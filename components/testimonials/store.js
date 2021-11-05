const { Testimonials } = require('../../models/index')

const updateTestimonial = async (id, body) => {
  try {
    const updated = await Testimonials.update(body, { where: { id } })
    return updated
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = {
  updateTestimonial
}
