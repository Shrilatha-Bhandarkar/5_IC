
const express = require('express');
const blogController = require('../controllers/blogController');
const validationMiddleware = require('../middleware/validationMiddleware');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware.logRequests, blogController.getAllBlogs);
router.post('/', validationMiddleware.validateCredentials, blogController.createBlog);
router.get('/:authorId', validationMiddleware.validateAuthorIdParam, blogController.getBlogsByAuthorId);

module.exports = router;
