
const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const isAuthenticated = require('../middleware/authMiddleware');
const validateAuthorID = require('../middleware/validationMiddleware');

router.get('/', isAuthenticated, blogController.getAllBlogs);
router.post('/', isAuthenticated, blogController.createBlog);
router.get('/:authorID', isAuthenticated, validateAuthorID, blogController.getBlogByAuthorID);

module.exports = router;
