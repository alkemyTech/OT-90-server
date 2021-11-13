const yup = require('yup')

const organizationPutSchema = yup.object({
  body: yup.object({
    name: yup
      .string().max(200),
    image: yup
      .string()
  })
})

module.exports = { organizationPutSchema }
