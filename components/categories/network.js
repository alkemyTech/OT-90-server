const express = require('express')
const controller = require('./controller')
const { validation, isAdmin } = require('../../middleware/index')
const categorySchema = require('../../validate/categorySchema')

const router = express.Router()

const response = { success: true, body: null }

router.get('/', async (req, res) => {
  try {
    const categories = await controller.getAll()
    res.status(200).send(categories)
  } catch (Error) {
    res.status(500).send({ Error: 'Something has gone wrong' })
  }
})

router.post('/', [validation(categorySchema), isAdmin], async (req, res) => {
  controller.addCategory(req.body.name, req.body.description)
    .then((cat) => res.status(201).json(cat))
    .catch((e) => {
      const error = {
        success: false,
        body: e.message
      }
      res.status(400).json(error)
    })
})

router.delete('/:id', isAdmin, async (req, res) => {
  const { params: { id } } = req
  try {
    const deleted = await controller.deleteCategory(id)
    if (!deleted) {
      res.status(404).send({ Error: `Not founded a category with id ${id}` })
      return
    }
    res.status(204).send()
  } catch (Error) {
    res.status(500).send({ Error: 'Something has gone wrong' })
  }
})

router.put('/:id', [isAdmin, validation(categorySchema)], async (req, res) => {
  const { params: { id }, body } = req
  try {
    const updated = await controller.updateCategory(id, body)
    if (!updated[0]) {
      response.success = false
      response.body = { Error: `Not founded a category with id ${id}` }
      res.status(400).json(response)
      return
    }
    response.body = { ...body, id }
    res.status(200).json(response)
  } catch (Error) {
    response.success = false
    response.body = Error
    res.status(500).json(response)
  }
})

module.exports = router
