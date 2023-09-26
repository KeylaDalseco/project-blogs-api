const userRoutes = require('express').Router();
const { UserController } = require('../controllers');
const { auth } = require('../middleware/auth.middleware');

userRoutes.get('/', auth, UserController.getAllUsers);
userRoutes.post('/', UserController.createUser);
userRoutes.get('/:id', auth, UserController.getById);

module.exports = userRoutes;