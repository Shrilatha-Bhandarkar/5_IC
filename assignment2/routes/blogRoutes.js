const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const authMiddleware = require('../middleware/authMiddleware');


router.use(authMiddleware.authenticate); 

router.get('/', blogController.getAllBlogTitles);
router.get('/:id', blogController.getBlogContent);
router.get('/:id/reviews', blogController.getBlogReviews);
router.get('/category/:category', blogController.getBlogByCategory);

module.exports = router;
