const { Router } = require('express')
const router = Router()

// Controllers
const controller = require('../controllers/user.controller')

router.post("/", controller.star);

module.exports = router
