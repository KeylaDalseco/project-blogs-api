const Joi = require('joi');

const addUser = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),  
});

const addCategory = Joi.object({
  name: Joi.string().required(), 
});

const addPost = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().min(1).items(Joi.number().min(1).integer()).required(),
}).messages({ 
  'any.required': 'Some required fields are missing',
  'string.empty': 'Some required fields are missing',
});

module.exports = { addUser, addCategory, addPost };