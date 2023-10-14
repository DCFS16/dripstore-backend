const express = require('express')
const { list, form, edit, editItem } = require('../controllers/admin/product.controllers')
const router = express.Router()

router.get('/', function (req, res, next) {
  res.send('Wellcome to the DripStore ADMIN')
})

router.get('/products', list)
router.get('/products/new', form)
router.get('/products/:id/edit', edit)
router.put('/products/:id', editItem)

module.exports = router
