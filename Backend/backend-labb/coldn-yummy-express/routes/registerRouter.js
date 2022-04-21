const { Router } = require('express')
const registerController = require('../controllers/registerController')
const {body} = require('express-validator')

const router = new Router()

router.get('/register'
// body('email').isEmail(),
// body('password').isLength({min: 5})
, registerController.getRegister)
router.post('/register', registerController.postRegister)

module.exports = router