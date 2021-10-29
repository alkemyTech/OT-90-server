const express = require('express')

const router = express.Router()

const controller = require('./controller')

router.get('/:id/public', async (req, res) => {
  try {
    const orgID = req.params.id
    const organization = await controller.getAll(orgID)
    res.status(200).send(organization)
  } catch (Error) {
    res.status(500).send({ Error: 'Something has gone wrong' })
  }
})

module.exports = router
