const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

// Register a new user
router.post('/register', authController.register);

// Login user
router.post('/login', authController.login);

// Get current user
router.get('/currentUser', authMiddleware, authController.getCurrentUser);

// Protected route
router.get('/protected', authMiddleware, authController.protectedRoute);

module.exports = router;
