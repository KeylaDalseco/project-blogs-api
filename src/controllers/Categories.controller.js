const { CategoryService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const createCategory = async (req, res) => {
  const name = req.body;
  const { status, data } = await CategoryService.createCategory(name);
  return res.status(mapStatusHTTP(status)).json(data);
};

const getAllCategories = async (req, res) => {
  const { status, data } = await CategoryService.getAllCategories();
  return res.status(mapStatusHTTP(status)).json(data);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await CategoryService.getById(Number(id));

  if (!data) {
    return res.status(mapStatusHTTP(status)).json({ message: 'Category does not exist' });
  }
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = { createCategory, getAllCategories, getById };