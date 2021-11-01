const { body, validationResult } = require('express-validator')
const express = require('express')
const controller = require('./controller')
const { isAdmin } = require('../../middleware/index')

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
  body('name').notEmpty().isLength({ max: 200 }),
  body('content').notEmpty(),
  async (req, res) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }
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
    } catch (error) {
      return res.status(500).send({ error })
    }
  })

module.exports = router
