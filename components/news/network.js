const express = require('express')
const controller = require('./controller')
const { isAdmin, validation } = require('../../middleware/index')
const { newsPostSchema } = require('../../validate/newsSchema')

const router = express.Router()
const response = { success: true, body: null }

router.get('/', async (req, res) => {
  try {
    const news = await controller.getAll()
    res.status(200).send(news)
  } catch (Error) {
    res.status(500).send({ Error: 'Something has gone wrong' })
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

router.post('/', isAdmin,
  validation(newsPostSchema),
  async (req, res) => {
    try {
      const postNew = await controller.addNew(
        req.body.name,
        req.body.content,
        req.body.image,
        req.body.categoryId
      )
      response.body = postNew
      return res.status(201).send(response)
    } catch (e) {
      response.success = false
      response.body = e
      return res.status(500).send(response)
    }
  })

router.delete('/:id', async (req, res) => {
  res.json('ok')
})

module.exports = router
