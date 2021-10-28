const express = require('express')
const controller = require('./controller')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const members = await controller.getAll()
    res.status(200).send(members)
  } catch (Err) {
    res.status(500).send({ Error: 'Something has gone wrong' })
  }
})

module.exports = router
