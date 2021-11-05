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

router.post('/', async (req, res) => {
  controller
    .addMember(req.body)
    .then((message) => res.status(201).send(message))
    .catch((error) => res.status(400).send(error))
})

router.delete('/:id', async (req, res) => {
  controller
    .deleteMember(req.params.id)
    .then((message) => res.status(201).send(message))
    .catch((error) => res.status(400).json(error))
})
module.exports = router
