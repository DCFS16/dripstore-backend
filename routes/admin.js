const express = require('express')
const { list, form, orders } = require('../controllers/admin/product.controllers')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Wellcome to the DripStore ADMIN')
})

router.get('/products', list)
router.get('/products/new', form)
router.get('/products/orders', orders)

module.exports = router
