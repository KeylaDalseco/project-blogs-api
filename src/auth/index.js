const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const config = { expiresIn: '7d', algorithm: 'HS256' };

const generateToken = (payload) => jwt.sign(payload, secret, config);

const generateAuth = (token) => jwt.verify(token, secret);

module.exports = {
  generateToken,
  generateAuth,
};