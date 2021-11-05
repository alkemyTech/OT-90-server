const yup = require('yup')

const testimonialSchema = yup.object({
  body: yup.object({
    name: yup.string().required().max(255),
    image: yup.string().required().max(255),
    content: yup.string().required().max(255)
  })
})

module.exports = testimonialSchema
