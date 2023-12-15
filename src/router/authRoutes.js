const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authControllers');
const { registerValidations, loginValidations } = require('../utils/user_validations');

router.get('/login', authControllers.loginView);
router.post('/login', loginValidations, authControllers.loginUser);
router.get('/register', authControllers.registerView);
router.post('/register', registerValidations, authControllers.registerUser);
router.get('/logout', authControllers.logoutView);

module.exports = router;