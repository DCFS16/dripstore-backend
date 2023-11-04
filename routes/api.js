const express = require('express')
const { list, create, remove, show, update } = require('../controllers/api/products.controllers')
const { checkSchema } = require('express-validator')
const productSchemaValidator = require('../schemas/products')
const router = express.Router()

router.get('/', function (req, res, next) {
  res.send('wellcome to the API')
});

router.get('/products', list)
router.get('/products/:id', show)
router.post('/products', checkSchema(productSchemaValidator), create)
router.delete('/products', remove)
router.put('/products/:id/edit', update)

module.exports = router
