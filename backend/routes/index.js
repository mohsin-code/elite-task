const { Router } = require('express')
const router = Router()

// Routers
const userRouter = require('./user.route')
const productRouter = require('./product.route')
const starRouter = require('./stars.route')

router.use('/users', userRouter)
router.use('/products', productRouter)
router.use('/stars', starRouter)

module.exports = router
