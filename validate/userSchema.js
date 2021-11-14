const yup = require('yup')

const userSchema = yup.object({
  body: yup.object({
    firstName: yup
      .string()
      .required()
      .max(200),
    lastName: yup
      .string()
      .required()
      .max(200),
    email: yup
      .string()
      .email()
      .required()
      .max(200),
    password: yup
      .string()
      .required()
      .max(255),
    role: yup
      .string()
      .required()
      .max(8)
  })
})

module.exports = userSchema
