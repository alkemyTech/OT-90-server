const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const sender = process.env.SENDGRID_EMAIL

const sendMail = async ({
  email, subject, msg
}) => {
  const rex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (!rex.test(String(email).toLowerCase())) throw new Error('Invalid email')
  try {
    await sgMail
      .send({
        to: email,
        from: sender,
        subject,
        html: msg
      })
    return 'email sent'
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  sendMail
}
