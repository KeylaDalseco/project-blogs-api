const jwt = require('jsonwebtoken');
const { UserService } = require('../services');

const isBodyValid = (email, password) => email && password;

const validateLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!isBodyValid(email, password)) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const user = await UserService.getByEmail(email);
    if (!user) return res.status(400).json({ message: 'Invalid fields' });
    if (!password) { 
      return res.status(400).json({ message: 'Invalid fields' });
    }
    const token = jwt.sign({ email: user.email, id: user.id,
    }, process.env.JWT_SECRET, { expiresIn: '7d', algorithm: 'HS256' });
    res.status(200).json({ token });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

module.exports = { validateLogin };