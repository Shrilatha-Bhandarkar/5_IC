
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authcontroller');
const validateAuthor = require('../middleware/validationMiddleware');

router.post('/login', authController.login);
router.post('/register', validateAuthor, authController.register);

module.exports = router;
