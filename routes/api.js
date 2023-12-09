const express = require('express')
const { checkSchema } = require('express-validator')
const productsController = require('../controllers/api/products.controller')
const usersController = require('../controllers/api/users.controller')
const categoriesController = require('../controllers/api/categories.controller')
const authController = require('../controllers/api/auth.controller')
const productSchemaValidator = require('../schemas/products')
const categorySchemaValidtor = require('../schemas/categories')
const userSchemaValidator = require('../schemas/users')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('wellcome to the API')
})

router.get('/users', usersController.list)
router.post('/users', checkSchema(userSchemaValidator), usersController.create)
router.post('/auth', authController.login)

router.get('/products', productsController.list)
router.get('/products/:id', productsController.show)
router.post('/products', checkSchema(productSchemaValidator), productsController.create)
router.delete('/products', productsController.remove)

router.get('/categories', categoriesController.list)
router.get('/categories/:id', categoriesController.show)
router.post('/categories', checkSchema(categorySchemaValidtor), categoriesController.create)
router.delete('/categories', categoriesController.remove)

module.exports = router
