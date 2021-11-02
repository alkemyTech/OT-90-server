const yup = require('yup')

const newsPostSchema = yup.object({
  body: yup.object({
    name: yup
      .string().required().max(200),
    content: yup
      .string().required(),
    image: yup
      .string(),
    categoryId: yup
      .number()
  })
})

module.exports = { newsPostSchema }
