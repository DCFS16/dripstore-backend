const express = require('express')
const { checkSchema } = require('express-validator')
const {
  list, create, remove, show, update,
} = require('../controllers/api/products.controllers')
const productSchemaValidator = require('../schemas/products')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('wellcome to the API')
})

router.get('/products', list)
router.get('/products/:id', show)
router.post('/products', checkSchema(productSchemaValidator), create)
router.delete('/products', remove)
router.put('/products/:id/edit', update)

module.exports = router
