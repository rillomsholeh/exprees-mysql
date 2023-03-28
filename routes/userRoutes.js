const router = require('express').Router();
const userController = require('../controlers/userController');


router.get('/users/:id', userController.id)
router.get('/users', userController.all)
router.post('/users', userController.create)
router.patch('/users/:id', userController.update)
router.delete('/users/:id', userController.destroy)

module.exports = router