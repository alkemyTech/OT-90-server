const express = require('express')
const controller = require('./controller')
const { isAdmin, validation } = require('../../middleware/index')
const { newsPostSchema } = require('../../validate/newsSchema')
const { newsPutSchema } = require('../../validate/newsSchema')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const news = await controller.getAll()
    res.status(200).send(news)
  } catch (Error) {
    res.status(500).send({ Error: 'Something has gone wrong' })
  }
})
router.post('/', isAdmin,
  validation(newsPostSchema),
  async (req, res) => {
    try {
      const response = await controller.addNew(
        req.body.name,
        req.body.content,
        req.body.image,
        req.body.categoryId
      )
      return res.status(201).json(response)
    } catch (failedResponse) {
      return res.status(500).json(failedResponse)
    }
  })

router.get('/:id', async (req, res) => {
  const { params: { id } } = req
  try {
    const news = await controller.getNewsById(id)
    res.status(200).send(news)
  } catch (Error) {
    res.status(500).send({ Error: 'Something has gone wrong' })
  }
})

router.put('/:id', isAdmin,
  validation(newsPutSchema),
  async (req, res) => {
    const { params: { id } } = req
    try {
      const response = await controller.modifyNew(
        id, req.body
      )
      return res.status(201).json(response)
    } catch (failedResponse) {
      return res.status(500).json(failedResponse)
    }
  })

module.exports = router
