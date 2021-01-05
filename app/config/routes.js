const express = require('express')
const userController = require('../controllers/User').User
const productController = require('../controllers/Product').Product
const transactionController = require('../controllers/Transaction').Transaction
const exportController = require('../controllers/export').Export

const router = express.Router()

router.use('/user', userController)
router.use('/product', productController)
router.use('/transaction', transactionController)
router.use('/export', exportController)


module.exports.router = router