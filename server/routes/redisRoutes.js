const express = require('express')
const redisController = require('../controllers/redisController')

const router = express.Router()

router.route('/').post(redisController.redisConnect)

module.exports = router
