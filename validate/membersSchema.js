const yup = require('yup')

const membersPutSchema = yup.object({
  body: yup.object({
    name: yup
      .string().max(200),
    image: yup
      .string()
  })
})

const membersPostSchema = yup.object({
  body: yup.object({
    name: yup
      .string().required().max(200),
    image: yup
      .string()
  })
})

module.exports = { membersPostSchema, membersPutSchema }
