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
      .max(255),
    phone: yup
      .string().matches(/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/)
      .required(),
    message: yup
      .string()
      .required()
  })
})

module.exports = { contactPostSchema }
