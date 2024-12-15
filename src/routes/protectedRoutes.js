// /server/routes/protectedRoutes.js
const express = require('express');
const verifyToken = require('../middleware/verifyToken');
const router = express.Router();

router.get('/profile', verifyToken, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;