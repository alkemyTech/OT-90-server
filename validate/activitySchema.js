const yup = require('yup')

const categoryPostSchema = yup.object({
  body: yup.object({
    name: yup
      .string()
      .required()
      .max(200),
    content: yup
      .string()
      .required()
      .max(255)
  })
})

module.exports = { categoryPostSchema }
