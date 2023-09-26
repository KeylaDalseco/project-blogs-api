const { Category } = require('../models');
const { addCategory } = require('./validations/schemas');

const getAllCategories = async () => {
  const category = await Category.findAll();
  return { status: 'SUCCESSFUL', data: category };
};

const getById = async (id) => {
  const category = await Category.findByPk(id);
  if (!category) return { status: 'IS_REQUIRED', data: category };

  return { status: 'SUCCESSFUL', data: category };
};

const createCategory = async ({ name }) => {
  const { error } = addCategory.validate({ name });
  if (error) {
    return { status: 'IS_REQUIRED', data: { message: error.details[0].message } };
  }

  const newCategory = await Category.create({ name });

    return { status: 'CREATED', data: newCategory };
  };

module.exports = {
  getAllCategories,
  createCategory,
  getById,
};