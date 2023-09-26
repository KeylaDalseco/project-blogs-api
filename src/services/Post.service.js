const { BlogPost, Category, PostCategory, User } = require('../models');
const { addPost } = require('./validations/schemas');

// promise all aqui espera percorrer o map de todas as categorias e achar seus respectivos ids.
// faço o some, e se 
const checkingCategories = async (categoryIds) => {
  const categories = categoryIds.map((category) => Category.findByPk(category));
  const categoryIdFound = (await Promise.all(categories)).some((category) => category === null);
  if (categoryIdFound) {
    return { status: 'IS_REQUIRED', data: { message: 'one or more "categoryIds" not found' } };
  }
};

const createPost = async (title, content, categoryIds, userId) => {
  const { error } = addPost.validate({ title, content, categoryIds });
  if (error) {
    return { status: 'IS_REQUIRED', data: { message: error.details[0].message } };
  }
  const validateCategory = await checkingCategories(categoryIds);
  if (validateCategory) return validateCategory;

  const newPost = await BlogPost.create({ title, content, categoryIds, userId });
  // abaixo, criamos a vinculação da junção, populando a tabela postCategory.
  await PostCategory.bulkCreate([...categoryIds.map((category) => (
    { categoryId: category, postId: newPost.id }
  ))]);
  return { status: 'CREATED', data: newPost };
};

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    attributes: { exclude: ['user_id'] },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } }],
  });
  return { status: 'SUCCESSFUL', data: posts };
};

const getById = async (id) => {
  const posts = await BlogPost.findOne({
    where: { id },
    attributes: { exclude: ['user_id'] },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } }],
  });
  if (!posts) {
    return { status: 'NOT_FOUND', data: { message: 'Post does not exist' } };
  }
  return { status: 'SUCCESSFUL', data: posts };
};

module.exports = {
  createPost,
  getAllPosts,
  getById,
};