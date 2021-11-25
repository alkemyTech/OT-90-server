const express = require('express')
const { validation, isAdmin } = require('../../middleware/index')
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

router.get('/:id', async (req, res) => {
  const { params: { id } } = req
  try {
    const response = await controller.getById(id)
    res.status(response.success ? 200 : 404).json(response)
  } catch (badResponse) {
    res.status(500).json(badResponse)
  }
})

router.put('/:id', isAdmin,
  validation(contactPostSchema),
  async (req, res) => {
    const { params: { id }, body } = req
    try {
      const response = await controller.updateContact(id, body)
      return res.status(response.success ? 201 : 404).json(response)
    } catch (failedResponse) {
      return res.status(500).json(failedResponse)
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

router.delete('/:id', isAdmin, async (req, res) => {
  try {
    await controller.deleteContact(req.params.id)
    res.status(204).json()
  } catch (e) {
    res.status(400).json(e)
  }
})

module.exports = router
