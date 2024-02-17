
const express = require('express');
const authController = require('../controllers/authController');
const validationMiddleware = require('../middleware/validationMiddleware');

const router = express.Router();

router.post('/login', validationMiddleware.validateCredentials, authController.login);
router.post('/register', validationMiddleware.validateCredentials, authController.register);

module.exports = router;
