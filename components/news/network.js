const express = require('express')
const controller = require('./controller')

const router = express.Router()

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

module.exports = router
