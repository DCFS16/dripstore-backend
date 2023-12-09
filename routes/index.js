const express = require('express')
const { home, login, about } = require('../controllers/index.controler')

const router = express.Router()

router.get('/', home)
router.get('/login', login)
router.get('/sobre', about)

module.exports = router
