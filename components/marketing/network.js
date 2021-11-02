const express = require('express')
const { sendMail } = require('.')

const router = express.Router()

const mail = {
  email: 'monsalbefotografia@gmail.com',
  subject: 'test',
  msg: `
  <h2>Gracias por comunicarte con <strong>Somos Más</strong></h2>
  <hr>
  <h3>Este es un mensaje de prueba</h3>
  <p>
    <ul>
      <li>Sumate</>
      <li>Colaborá</>
      <li>Participá</>
    </ul>
  </p>
  <footer>SomosMas.ong</footer>
  `
}

router.get('/', async (req, res) => {
  try {
    res.status(200).send(await sendMail(mail))
  } catch (error) {
    res.status(500).send(error)
  }
})

module.exports = router
