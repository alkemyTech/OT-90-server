const yup = require('yup')

const contactPostSchema = yup.object({
  body: yup.object({
    name: yup
      .string()
      .required()
      .max(200),
    email: yup
      .string().email()
      .required()
      .max(255)
  })
})

module.exports = { contactPostSchema }
