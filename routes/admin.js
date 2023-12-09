const express = require('express')
const productController = require('../controllers/admin/product.controller')
const userController = require('../controllers/admin/user.controller')
const categoryController = require('../controllers/admin/category.controller')

const router = express.Router()

router.get('/', (request, response) => {
  response.render('index', { title: 'Express' })
})

router.get('/products', productController.list)
router.get('/products/new', productController.form)

router.get('/categories', categoryController.list)
router.get('/categories/new', categoryController.form)

router.get('/users', userController.list)
router.get('/users/new', userController.form)

module.exports = router
