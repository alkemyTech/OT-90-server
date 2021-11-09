const express = require('express')
const controller = require('./controller')
const { validation, isAdmin } = require('../../middleware/index')
const testimonialSchema = require('../../validate/testimonialSchema')

const router = express.Router()

router.put('/:id', [isAdmin, validation(testimonialSchema)], async (req, res) => {
  const { params: { id }, body } = req
  try {
    const updated = await controller.updateTestimonial(id, body)
    if (!updated.success) {
      res.status(404).json(updated)
      return
    }
    res.status(200).json(updated)
  } catch (badResponse) {
    res.status(500).json(badResponse)
  }
})

module.exports = router
