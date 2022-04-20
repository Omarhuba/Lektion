const {Router} = require('express')

const router = new Router()
const CommentController = require('../controllers/CommentController')
const Auth = require('../middleware/auth')

router.post('/', Auth.user, CommentController.create )
router.get('/', Auth.user, CommentController.getAll )
router.get('/:id', CommentController.getOne )
router.patch('/:id', Auth.user, CommentController.update )
router.delete('/:id', Auth.user, CommentController.delete )

module.exports = router