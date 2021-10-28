const express = require('express')

const router = express.Router()

const controller = require('./controller')

router.get('/', (req, res) => {
  res.send('connect to api')
})

router.get('/:id/public', async (req, res) => {
  try {
    const param = req.params.id
    const organization = await controller.getAll(param)
    res.status(200).send(organization)
  } catch (Error) {
    res.status(500).send({ Error: 'Something has gone wrong' })
  }
})

module.exports = router
