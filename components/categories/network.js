const express = require('express')
const controller = require('./controller')
const { isAdmin } = require('../../middleware')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const categories = await controller.getAll()
    res.status(200).send(categories)
  } catch (Error) {
    res.status(500).send({ Error: 'Something has gone wrong' })
  }
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

module.exports = router
