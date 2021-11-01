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
    .then((cat) => res.status(201).send(cat))
    .catch((e) => res.status(400).send(e.message))
})

module.exports = router
