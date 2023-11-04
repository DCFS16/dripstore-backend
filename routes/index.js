const express = require('express')
const { homeController, aboutController } = require('../controllers/index.controlers')

const router = express.Router()

router.get('/', homeController)
router.get('/sobre', aboutController)

module.exports = router
