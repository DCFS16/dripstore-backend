const express = require('express')
const { checkSchema } = require('express-validator')
const productsController = require('../controllers/api/products.controller')
const usersController = require('../controllers/api/users.controller')
const authController = require('../controllers/api/auth.controller')
const productSchemaValidator = require('../schemas/products')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('wellcome to the API')
})

router.get('/products', productsController.list)
router.get('/products/:id', productsController.show)
router.post(
  '/products',
  checkSchema(productSchemaValidator),
  productsController.create,
)
router.delete('/products', productsController.remove)

router.get('/users', usersController.list)
router.post('/users', usersController.create)

router.post('/auth', authController.login)

module.exports = router
