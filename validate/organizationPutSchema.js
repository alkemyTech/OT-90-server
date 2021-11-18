const yup = require('yup')

const organizationPutSchema = yup.object({
  body: yup.object({
    name: yup
      .string().max(200).required(),
    image: yup
      .string().required()
  })
})

module.exports = { organizationPutSchema }
