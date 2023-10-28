const express = require('express')
const productController = require('../controllers/admin/product.controllers')
const categoryController = require('../controllers/admin/category.controllers')
const router = express.Router()

router.get('/', function (req, res, next) {
  res.send('Wellcome to the DripStore ADMIN')
})

router.get('/products', productController.list)
router.get('/products/new', productController.form)

router.get('/categories', categoryController.list)
router.get('/categories/new', categoryController.form)

module.exports = router
