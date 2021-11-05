const express = require('express')
const controller = require('./controller')

const { validation } = require('../../middleware/index')

const router = express.Router()

const { membersPostSchema } = require('../../validate/membersSchema')
const { membersPutSchema } = require('../../validate/membersSchema')

router.get('/', async (req, res) => {
  try {
    const members = await controller.getAll()
    res.status(200).send(members)
  } catch (Err) {
    res.status(500).send({ Error: 'Something has gone wrong' })
  }
})

router.post('/', validation(membersPostSchema),
  async (req, res) => {
    controller
      .addMember(req.body)
      .then((message) => res.status(201).send(message))
      .catch((error) => res.status(400).send(error))
  })

router.put('/:id', validation(membersPutSchema),
  async (req, res) => {
    const { params: { id } } = req
    try {
      const response = await controller.modifyMember(
        id, req.body
      )
      return res.status(201).json(response)
    } catch (failedResponse) {
      return res.status(500).json(failedResponse)
    }
  })

module.exports = router
