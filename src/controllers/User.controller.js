const { UserService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');
const auth = require('../auth/index');

const createUser = async (req, res) => {
  const user = req.body;
  const { status, data } = await UserService.createUser(user);
  console.log('LOG DO USER:', data);
  const token = auth.generateToken({ 
      userId: data.userId,
      displayName: data.displayName,
      email: data.email,
      image: data.image,
  });
  if (status === 'IS_REQUIRED') return res.status(mapStatusHTTP(status)).json(data);
  if (status === 'CONFLICT') return res.status(mapStatusHTTP(status)).json(data);
    return res.status(mapStatusHTTP(status)).json({ token });
};

const getAllUsers = async (req, res) => {
  const { status, data } = await UserService.getAllUsers();
  return res.status(mapStatusHTTP(status)).json(data);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await UserService.getById(Number(id));

  if (!data) {
    return res.status(mapStatusHTTP(status)).json({ message: 'User does not exist' });
  }
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = { createUser, getAllUsers, getById };