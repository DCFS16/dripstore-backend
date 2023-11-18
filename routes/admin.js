const express = require('express')
const { list, form } = require('../controllers/admin/product.controllers')
const { listUsers } = require('../controllers/admin/user.controllers')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Wellcome to the DripStore ADMIN')
})

router.get('/products', list)
router.get('/products/new', form)

router.get('/users', listUsers)

module.exports = router
