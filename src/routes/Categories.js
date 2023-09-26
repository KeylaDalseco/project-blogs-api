const categoriesRoutes = require('express').Router();
const { auth } = require('../middleware/auth.middleware');
const { CategoriesController } = require('../controllers');

categoriesRoutes.get('/', auth, CategoriesController.getAllCategories);
categoriesRoutes.post('/', auth, CategoriesController.createCategory);

module.exports = categoriesRoutes;