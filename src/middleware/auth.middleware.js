const { generateAuth } = require('../auth');

const auth = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    if (!authorization) return res.status(401).json({ message: 'Token not found' });
    const token = authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    const payload = generateAuth(token);
    req.payload = payload;
    console.log('wwwwwwwww', payload);
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: 'Token not found' });
  }
};

module.exports = { auth };