const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authControllers');

router.get('/login', authControllers.loginView);
router.post('/login', authControllers.loginUser);
router.get('/register', authControllers.registerView);
router.post('/register', authControllers.registerUser);
router.get('/logout', authControllers.logoutView);

module.exports = router;