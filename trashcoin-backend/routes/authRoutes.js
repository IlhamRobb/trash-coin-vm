const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// Rute Register
router.post('/register', register);

// Rute Login
router.post('/login', login);

module.exports = router;
