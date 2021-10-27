const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  const categories = [{ name: 'test1' }, { name: 'test2' }]
  res.status(200).send(categories)
})

module.exports = router
