const express = require('express')
const controller = require('./controller')
const { validation, isAdmin } = require('../../middleware/index')
const categorySchema = require('../../validate/categorySchema')

const router = express.Router()

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
    if (!deleted.success) {
      res.status(404).json(deleted)
      return
    }
    res.status(204).json(deleted)
  } catch (badResponse) {
    res.status(500).json(badResponse)
  }
})

router.put('/:id', [isAdmin, validation(categorySchema)], async (req, res) => {
  const { params: { id }, body } = req
  try {
    const updated = await controller.updateCategory(id, body)
    if (!updated.success) {
      res.status(404).json(updated)
      return
    }
    res.status(200).json(updated)
  } catch (badResponse) {
    res.status(500).json(badResponse)
  }
})


router.get('/:id', async (req, res) => {
  const { params: { id } } = req
  try {
    const response = await controller.getCategoryById(id)
    res.status(200).json(response)
  } catch (badResponse) {
    res.status(500).json(badResponse)
  }
})

module.exports = router
