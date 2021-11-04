const yup = require('yup')

const userSchema = yup.object({
  body: yup.object({
    Nombre: yup
      .string()
      .required()
      .max(200),
    Apellido: yup
      .string()
      .required()
      .max(200),
    Email: yup
      .string()
      .email()
      .required()
      .max(200),
    Contraseña: yup
      .string()
      .required()
      .max(255),
    Rol: yup
      .string()
      .required()
      .max(2)
  })
})

module.exports = { userSchema }
