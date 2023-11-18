const express = require('express')
const productController = require('../controllers/admin/product.controllers')
const categoryController = require('../controllers/admin/category.controllers')
const { Product } = require('../models/Product')

const router = express.Router()

router.get('/', async (req, res) => {
  const abc = await Product.findByPk(1)

  console.log(abc.getOrders)



  const cba = await abc.getOrders()

  res.json({ abc, cba })
})

router.get('/products', productController.list)
router.get('/products/new', productController.form)

router.get('/categories', categoryController.list)
router.get('/categories/new', categoryController.form)

module.exports = router
