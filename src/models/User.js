const db = require('../config/db');

const User = {
  findByEmail: (email, callback) => {
    db.query('SELECT * FROM users WHERE email = ?', [email], callback);
  },
  createUser: (email, password, callback) => {
    db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, password], callback);
  },
};

module.exports = User;
