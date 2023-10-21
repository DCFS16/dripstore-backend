const express = require('express')
const { list, create, remove, show } = require('../controllers/api/products.controllers')
const { checkSchema } = require('express-validator')
const productSchemaValidator = require('../validators/productSchemaValidator')
const router = express.Router();

router.get('/', function (req, res, next) {
  res.send('wellcome to the API')
});

router.get('/products', list)
router.get('/products/:id', show)
router.post('/products', checkSchema(productSchemaValidator), create)
router.delete('/products', remove)

module.exports = router
