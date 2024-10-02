const express = require('express')
const router = express.Router()
const productControllers = require('../controllers/productControl')

router.get('/getAllProduct',productControllers.getAllProduct)
router.get('/getDetailProduct/:id',productControllers.getDeltailProduct)

module.exports = router