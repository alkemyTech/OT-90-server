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
router.post('/', async (req, res) => {
  try {
    const postNew = await controller.addNew(
      req.body.name,
      req.body.content,
      req.body.image,
      req.body.categoryId
    )
    return res.status(201).send({
      message: 'New created',
      postNew
    })
  } catch (e) {
    return res.status(500).send({ error: e })
  }
})

module.exports = router
