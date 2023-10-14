const express = require('express')
const { list, create, remove, show, createValidators } = require('../controllers/api/products.controllers')
const router = express.Router()


router.get('/', function (req, res, next) {
  res.send('wellcome to the API')
})

router.get('/products', list)
router.get('/products/:id', show)
router.post('/products', create)
router.delete('/products', remove)

module.exports = router
