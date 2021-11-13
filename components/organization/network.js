const express = require('express')

const router = express.Router()

const controller = require('./controller')

const { isAdmin, validation } = require('../../middleware/index')
const { organizationPutSchema } = require('../../validate/organizationPutSchema')

router.get('/:id/public', async (req, res) => {
  try {
    const orgID = req.params.id
    const organization = await controller.getAll(orgID)
    res.status(200).send(organization)
  } catch (Error) {
    res.status(500).send({ Error: 'Something has gone wrong' })
  }
})

router.put('/:id', isAdmin,
  validation(organizationPutSchema),
  async (req, res) => {
    const { params: { id } } = req
    try {
      const response = await controller.modifyOrg(
        id, req.body
      )
      return res.status(201).json(response)
    } catch (failedResponse) {
      return res.status(500).json(failedResponse)
    }
  })

module.exports = router
