var express = require('express')
var userController = require('../controllers/User').User
var productController = require('../controllers/Product').Product
var transactionController = require('../controllers/Transaction').Transaction
var exportController = require('../controllers/export').Export

var router = express.Router()

router.use('/user', userController)
router.use('/product', productController)
router.use('/transaction', transactionController)
router.use('/export', exportController)


module.exports.router = router