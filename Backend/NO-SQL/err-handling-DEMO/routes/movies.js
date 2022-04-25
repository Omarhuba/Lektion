const {Router} = require('express')
const MovieController = require('../controllers/MovieController')

const router = new Router()

const controller = new MovieController()

router.get('/', controller.getAll)
router.get('/:id', controller.getOne)
router.post('/', controller.create)
router.delete('/:id', controller.delete)



module.exports = router