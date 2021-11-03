const express = require('express')
const controller = require('./controller')
const { isAdmin, validation } = require('../../middleware/index')
const { newsPostSchema } = require('../../validate/newsSchema')

const router = express.Router()
const response = { success: true, body: null }

router.get('/', async (req, res) => {
  try {
    const news = await controller.getAll()
    res.status(200).json(news)
  } catch (Error) {
    res.status(500).json({ Error: 'Something has gone wrong' })
  }
})

router.get('/:id', async (req, res) => {
  const { params: { id } } = req
  try {
    const news = await controller.getNewsById(id)
    res.status(200).json(news)
  } catch (Error) {
    res.status(500).json({ Error: 'Something has gone wrong' })
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
      return res.status(201).json(response)
    } catch (e) {
      response.success = false
      response.body = e
      return res.status(500).json(response)
    }
  })

router.delete('/:id', isAdmin, async (req, res) => {
  try {
    response.body = await controller.deleteNew(req.params.id)
    res.status(200).json(response)
  } catch (e) {
    res.status(400).json(e)
  }
})

module.exports = router
