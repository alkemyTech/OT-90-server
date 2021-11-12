const { Testimonials } = require('../../models/index')

const updateTestimonial = async (id, body) => {
  try {
    const updated = await Testimonials.update(body, { where: { id } })
    return updated
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

const addTestimonial = async (name, image, content) => {
  try {
    const newTestimonial = await Testimonials.create({ name, image, content })
    return newTestimonial
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

const deleteById = async (id) => {
  try {
    const deleted = await User.destroy({ where: { id } })
    return deleted
  } catch ({ message: error }) {
    throw new Error(error)
  }
}

module.exports = {
  updateTestimonial,
  addTestimonial,
  deleteById
}
