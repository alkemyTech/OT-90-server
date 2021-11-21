const express = require('express')

const router = express.Router()

const controller = require('./controller')

const { isAdmin, validation } = require('../../middleware/index')
const { organizationPutSchema } = require('../../validate/organizationPutSchema')

router.get('/:id/public', async (req, res) => {
  try {
    const { id } = req.params
    const response = await controller.getAll(id)
    res.status(response.success ? 200 : 404).json(response)
  } catch (badResponse) {
    res.status(500).json(badResponse)
  }
})

router.put('/:id', isAdmin,
  validation(organizationPutSchema),
  async (req, res) => {
    const { params: { id } } = req
    try {
      const response = await controller.modifyOrg(id, req.body)
      return res.status(response.success ? 201 : 404).json(response)
    } catch (failedResponse) {
      return res.status(500).json(failedResponse)
    }
  })

module.exports = router
