const express = require('express')
const contactsNetwork = require('../components/contacts/network')

const router = express.Router()

router.use('/contacts', contactsNetwork)

module.exports = router
