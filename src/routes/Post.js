const postRoutes = require('express').Router();
const { auth } = require('../middleware/auth.middleware');
const { PostController } = require('../controllers');

postRoutes.get('/', auth, PostController.getAllPosts);
postRoutes.post('/', auth, PostController.createPost);
postRoutes.get('/:id', auth, PostController.getById);

module.exports = postRoutes;