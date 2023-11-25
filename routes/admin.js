const express = require('express')
const productController = require('../controllers/admin/product.controller')
const userController = require('../controllers/admin/user.controller')
const { checkAuth } = require('../middlewares/auth.middleware')
const router = express.Router()

router.get('/', (request, response) => {
  response.render('index', { title: 'Express' })
})

router.get('/products', productController.list)
router.get('/products/new', productController.form)

router.get('/users', userController.list)
router.get('/users/new', userController.form)

module.exports = router
