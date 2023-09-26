const loginRoutes = require('express').Router();
const { LoginController } = require('../controllers');

loginRoutes.post('/', LoginController.validateLogin);

module.exports = loginRoutes;