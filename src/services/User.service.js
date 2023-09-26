const { User } = require('../models');
const { addUser } = require('./validations/schemas');

const getAllUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return { status: 'SUCCESSFUL', data: users };
};

const getById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });
  if (!user) return { status: 'NOT_FOUND', data: user };

  return { status: 'SUCCESSFUL', data: user };
};

const getByEmail = (email) => User.findOne({ where: { email } });

const createUser = async ({ 
  displayName, email, password, image }) => {
  const { error } = addUser.validate({ displayName, email, password, image });
  if (error) {
    return { status: 'IS_REQUIRED', data: { message: error.details[0].message } };
  }

  const findByEmail = await getByEmail(email);
  if (findByEmail) {
    return { status: 'CONFLICT', data: { message: 'User already registered' } };
  }
  const newUser = await User.create({ displayName, email, password, image });

    return { status: 'CREATED', data: newUser };
  };

module.exports = {
  createUser,
  getByEmail,
  getAllUsers,
  getById,
};