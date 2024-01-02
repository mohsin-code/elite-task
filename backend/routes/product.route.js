const { Router } = require('express')
const router = Router()

// Controllers
const controller = require('../controllers/product.controller')

router.get('/', controller.list)

module.exports = router
