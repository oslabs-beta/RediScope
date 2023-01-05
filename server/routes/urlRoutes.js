const express = require('express')
const urlController = require('../controllers/urlController')

const router = express.Router()

router.post('/createURL', urlController.createURL)

router.get('/getUserURL/:user', urlController.getUserURL)

router.delete('/:url/:user', urlController.deleteURL)

module.exports = router
   