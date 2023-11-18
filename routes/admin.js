const express = require('express')
const { list, form } = require('../controllers/admin/product.controllers')
const { listUsers, formUsers} = require('../controllers/admin/user.controllers')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Wellcome to the DripStore ADMIN')
})

router.get('/products', list)
router.get('/products/new', form)

router.get('/users', listUsers)
router.get('/users/new', formUsers)

module.exports = router
