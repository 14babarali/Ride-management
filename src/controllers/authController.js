const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const dotenv = require('dotenv');
dotenv.config();

const login = (req, res) => {
  const { email, password } = req.body;

  User.findByEmail(email, (err, results) => {
    if (err || results.length === 0) {
      return res.status(400).json({ message: 'User not found' });
    }

    const user = results[0];
    bcrypt.compare(password, user.password, (err, match) => {
      if (err || !match) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
    });
  });
};


const register = (req, res) => {
  const { email, password } = req.body;

  User.findByEmail(email, (err, results) => {
    if (err || results.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        return res.status(500).json({ message: 'Error hashing password' });
      }

      User.createUser(email, hashedPassword, (err, result) => {
        if (err) {
          console.error('Error saving user:', err); 
          return res.status(500).json({ message: 'Error saving user' });
        }
        res.status(201).json({ message: 'User created successfully' });
      });
    });
  });
};

module.exports = { login, register };


