const express = require('express')

const { validation } = require('../../middleware/index')

const { contactPostSchema } = require('../../validate/contactSchema')

const controller = require('./controller')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const contacts = await controller.getAll()
    res.status(200).send(contacts)
  } catch (Error) {
    res.status(500).send({ Error: 'Something has gone wrong' })
  }
})

router.post('/', [validation(contactPostSchema)],
  async (req, res) => {
    const {
      name, phone, email, message
    } = req.body
    await controller.addCont(name, phone, email, message)
      .then((contact) => res.status(201).json(contact))
      .catch((e) => {
        const error = {
          success: false,
          body: e.message
        }
        res.status(400).json(error)
      })
  })

router.delete('/:id', async (req, res) => {
  try {
    await controller.deleteContact(req.params.id)
    res.status(204).json()
  } catch (e) {
    res.status(400).json(e)
  }
})

module.exports = router
