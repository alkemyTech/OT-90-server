const yup = require('yup')

const activityPostSchema = yup.object({
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

const activityPutSchema = yup.object({
  body: yup.object({
    name: yup
      .string()
      .max(200),
    content: yup
      .string()
      .max(255)
  })
})

module.exports = {
  activityPostSchema,
  activityPutSchema
}
